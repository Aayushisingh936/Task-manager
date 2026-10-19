import { useEffect, useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 500);

  return () => clearTimeout(timer);
  }, [value, onSearch]);


return(
  <input
    type="text"
    placeholder="Search tasks..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
   />
  );
}

export default SearchBar;
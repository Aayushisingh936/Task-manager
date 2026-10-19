import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Smart Task Manager</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

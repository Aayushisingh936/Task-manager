function Home() {
  const today = new Date().toLocaleString();

  return (
    <div>
      <h1>Welcome to Smart Daily Task Manager</h1>
      <p>Current Date: {today}</p>
      <p>Total Tasks: 4</p>
    </div>
  );
}

export default Home;
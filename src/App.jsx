import{ lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
// import About from "./pages/About";

const About = lazy(()=>import("./pages/About"));
const Statistics = lazy(() => import("./pages/Statistics"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
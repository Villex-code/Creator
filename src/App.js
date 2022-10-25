import logo from "./logo.svg";
import "./App.css";
import myapp from "./spline";
import Home from "./pages/Home/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Nav from "./Components/NavBar/Nav";

function App() {
  const [Mynav, SetMynav] = useState(true);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

/*{Mynav && <Nav />}*/

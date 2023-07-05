import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("Dark");
  // eslint-disable-next-line
  const toggleMode = () => {
    if (mode === "Dark") {
      setmode("Light");
    } else {
      setmode("Dark");
    }
  };
  document.body.style.backgroundColor = `${
    mode === "Dark" ? "rgb(17 24 39)" : "#D6D5DB"
  }`;
  return (
    <div className="m-3 position-relative">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Home mode={mode} toggleMode={toggleMode} />
        <Routes>
          {/* <Route exact index element={<Home mode={mode} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

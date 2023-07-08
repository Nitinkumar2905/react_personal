import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Components/Footer";
import ProjectSection from "./Components/Routes/ProjectSection";
import ServicesSection from "./Components/Routes/ServicesSection";
import Contact from "./Components/Routes/ContactSection";
import Connect from "./Components/Routes/Connect";
import Login from "./Components/Authentication/Login";
import SignUp from './Components/Authentication/SignUp'
import { Toaster } from "react-hot-toast";

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
  document.body.style.backgroundColor = `${mode === "Dark" ? "rgb(17 24 39)" : "#D6D5DB"
    }`;
  return (
    <div className="mx-3 position-relative">
      <Router>
        <div><Toaster position="top-center"
          reverseOrder={false} /></div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact index element={<Home mode={mode} />} />
          <Route exact path="/" element={<Home mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/projects" element={<ProjectSection mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/services" element={<ServicesSection mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/contact" element={<Contact mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/connect" element={<Connect mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/login" element={<Login mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/signUp" element={<SignUp mode={mode} toggleMode={toggleMode} />}></Route>
        </Routes>
        <Footer mode={mode} />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Components/Footer";
import ProjectsRoute from "./Components/Routes/ProjectsRoute";
import ServicesRoute from "./Components/Routes/ServicesRoute";
import Contact from "./Components/Routes/Contact";
import Connect from "./Components/Routes/Connect";
import Login from "./Components/Authentication/Login";
import SignUp from './Components/Authentication/SignUp'
import { Toaster } from "react-hot-toast";
import LoadingBar from 'react-top-loading-bar'
import SavedProjects from './Components/Routes/UserSavedProjects'
import ProjectState from "./Context/projects/ProjectState";
import UserProfile from "./Components/Routes/UserProfile";
// import AuthState from "./Context/authentication_/AuthState";

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
  const [progress, setProgress] = useState(0)
  document.body.style.backgroundColor = `${mode === "Dark" ? "rgb(17 24 39)" : "#D6D5DB"
    }`;

  return (
    // <AuthState>
    <ProjectState>
      <Router>
        <div><Toaster position="top-center" toastOptions={{ duration: 1000 }}
          reverseOrder={false} /></div>
        <LoadingBar
          height={3}
          color={`${mode === "Dark" ? "white" : "rgb(17, 24, 39)"}`}
          backgroundColor={`${mode === 'Dark' ? 'white' : 'black'}`} progress={progress}
        />
        <Navbar mode={mode} toggleMode={toggleMode} setProgress={setProgress} />
        <Routes>
          <Route exact index element={<Home mode={mode} setProgress={setProgress} />} />
          <Route exact path="/" element={<Home setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/projects" element={<ProjectsRoute setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/services" element={<ServicesRoute setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/contact" element={<Contact setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/connect" element={<Connect setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/login" element={<Login setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/signUp" element={<SignUp setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/profile/savedProjects" element={<SavedProjects setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
          <Route exact path="/profile" element={<UserProfile setProgress={setProgress} mode={mode} toggleMode={toggleMode} />}></Route>
        </Routes>
        <Footer className="position-absolute end-0" mode={mode} />
      </Router>
    </ProjectState>
    // </AuthState>
  );
}

export default App;

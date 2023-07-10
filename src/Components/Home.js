import React from "react";
import "./styles/Home.css";
// import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
// import Contact from "./Routes/ContactSection";
const Home = (props) => {
  return (
    <>
      <Hero mode={props.mode} setProgress={props.setProgress}></Hero>
      <Projects mode={props.mode} />
      <Services mode={props.mode} setProgress={props.setProgress} />
    </>
  );
};

export default Home;

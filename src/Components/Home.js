import React from "react";
import './styles/Home.css'
// import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from './Projects'
import Services from "./Services";
import Contact from "./Contact";
const Home = (props) => {
  return (
    <>
      {/* <Navbar toggleMode={props.toggleMode} mode={props.mode}/> */}
      <Hero mode={props.mode}></Hero>
      <Projects mode={props.mode}/>
      <Services mode={props.mode}/>
      <Contact mode={props.mode}/>
    </>
  );
};

export default Home;

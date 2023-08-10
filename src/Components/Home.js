import React from "react";
import "./styles/Home.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
const Home = (props) => {
  return (
    <>
      <Hero mode={props.mode} setProgress={props.setProgress}></Hero>
      {/* <HeroChakraUI
        mode={props.mode}
        setProgress={props.setProgress}
      ></HeroChakraUI> */}
      <Projects mode={props.mode} />
      <Services mode={props.mode} setProgress={props.setProgress} />
    </>
  );
};

export default Home;

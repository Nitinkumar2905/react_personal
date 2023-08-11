import React from "react";
import "./styles/Home.css";
import Hero from "./Hero";
const Home = (props) => {
  return (
    <>
      <Hero mode={props.mode} setProgress={props.setProgress}></Hero>
    </>
  );
};

export default Home;

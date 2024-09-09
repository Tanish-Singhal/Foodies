import React from "react";
import Hero from "./About Page/Hero"
import Story from "./About Page/Story"
import Values from "./About Page/Values"
import Team from "./About Page/Team"
import Action from "./About Page/Action"
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Story />
      <Values />
      <Team />
      <Action />
    </div>
  );
};

export default About;

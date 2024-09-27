import React from "react";
import Hero from "../../Components/Hero";
import Academic from "./Academic";
import Cetificastion from "./Cetificastion";
import Courses from "./Courses";

const Education = () => {
  const quotes = {
    name: "Isaac Newton",
    quote: "If I have seen further, it is by standing on the shoulders of giants.",
  };

  return (
    <div>
      <Hero quotes={quotes} />
      <Academic />
      <Cetificastion />
      <Courses/>
    </div>
  );
};

export default Education;

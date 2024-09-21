import React from "react";
import Hero from '../../Components/Hero';

const Education = () => {
  const quotes = {
    name: "Isaac Newton",
    quote: "If I have seen further, it is by standing on the shoulders of giants.",
  };

  return (
    <div>
      <Hero quotes={quotes} />
      Education
    </div>
  );
};

export default Education;

import React from "react";
import Hero from '../../Components/Hero';

const Achievements = () => {
  const quotes = {
    name: "Michael Jordan",
    quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. But that's why I succeed.",
  };
  return (
    <div>
      <Hero quotes={quotes} />
      Achievements
    </div>
  );
};

export default Achievements;

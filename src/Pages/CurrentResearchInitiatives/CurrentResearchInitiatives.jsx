import React from "react";
import Hero from '../../Components/Hero';

const CurrentResearchInitiatives = () => {
  const quotes = {
    name: "Albert Einstein",
    quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  };

  return (
    <div>
      <Hero quotes={quotes} />
      Current Research Initiatives
    </div>
  );
};

export default CurrentResearchInitiatives;

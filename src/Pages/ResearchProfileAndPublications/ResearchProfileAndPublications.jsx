import React from "react";
import Hero from '../../Components/Hero';

const ResearchProfileAndPublications = () => {
  const quotes = {
    name: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  };
  return (
    <div>
      <Hero quotes={quotes} />
      Research Profile And Publications
    </div>
  );
};

export default ResearchProfileAndPublications;

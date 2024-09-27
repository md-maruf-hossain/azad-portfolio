import React from "react";
import Hero from '../../Components/Hero';
import Journals from "./Journals";
import Conference from "./Conference";

const ResearchProfileAndPublications = () => {
  const quotes = {
    name: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  };
  return (
    <div>
      <Hero quotes={quotes} />
      <Journals/>
      <Conference/>
    </div>
  );
};

export default ResearchProfileAndPublications;

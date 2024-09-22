import React from "react";
import Hero from "../../Components/Hero";
import MyFamily from "./MyFamily";
import Hobbies from "./Hobbies";

const Others = () => {
  const quotes = {
    name: "George Bernard Shaw",
    quote: "A happy family is but an earlier heaven.",
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero quotes={quotes} />
      <MyFamily/>
      <Hobbies/>
    </div>
  );
};

export default Others;

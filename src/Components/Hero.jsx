import React from "react";

const Hero = (quotes) => {
  const { name, quote } = quotes?.quotes;
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 h-96 flex justify-center items-center text-white px-6">
      <div className="max-w-4xl md:max-w-l text-center space-y-6">
        <h1 className=" md:text-2xl lg:text- font-bold">"{quote}"</h1>
        <p className="text-lg md:text-2xl font-light">- {name}</p>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = (quotes) => {
  const { name, quote } = quotes?.quotes;
  return (
    <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">

          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6 text-justify font-sans text-xl font-semibold text-green-600 sm:text-4xl md:mx-auto">{quote}</h2>
            <p className="text-center text-gray-700 md:text-xl uppercase">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

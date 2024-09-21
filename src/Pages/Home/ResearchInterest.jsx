import React from "react";

const ResearchInterest = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-8 font-sans text-3xl font-bold text-center tracking-tight text-green-600 sm:text-4xl sm:leading-none">Research Interests</h2>
      <div className="bg-green-600">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-gray-800">
              <circle fill="currentColor" fillOpacity="0.4" cx="44" cy="44" r="15.5" />
              <circle fillOpacity="0.1" fill="currentColor" cx="44" cy="44" r="44" />
              <circle fillOpacity="0.1" fill="currentColor" cx="44" cy="44" r="37.5" />
              <circle fillOpacity="0.1" fill="currentColor" cx="44" cy="44" r="29.5" />
              <circle fillOpacity="0.1" fill="currentColor" cx="44" cy="44" r="22.5" />
            </svg>
          </div>
          <div className="relative grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Sustainable Energy Integration</p>
            </div>
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Renewable Energy Systems</p>
            </div>
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Environmental Impact Assessment</p>
            </div>
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Advanced Predictive Analytics</p>
            </div>
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Waste Management and Energy Recovery</p>
            </div>
            <div className="px-6 py-12 cursor-pointer text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <p className="font-semibold text-gray-200">Machine Learning in Energy & Environmental Research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInterest;

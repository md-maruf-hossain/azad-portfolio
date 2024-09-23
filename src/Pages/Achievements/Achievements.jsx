import React from "react";
import Hero from "../../Components/Hero";

const Achievements = () => {
  const quotes = {
    name: "Michael Jordan",
    quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. But that's why I succeed.",
  };
  return (
    <div>
      <Hero quotes={quotes} />
      <section className="bg-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">Achievements</h2>
          </div>
          {/* 1st */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">University Scholarship</h3>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold leading-6">Bangladesh Technical Scholarship</h4>
                    <p className="mt-2     ">
                      <span className="font-bold">Awarded:</span> Twice for outstanding academic performance
                    </p>
                    <p className="mt-2     ">
                      <span className="font-bold">Years:</span> 1st year and 4th year
                    </p>
                    <p className="mt-2     ">
                      <span className="font-bold">Institution:</span> Department of Industrial & Production Engineering (IPE), Rajshahi University of Engineering & Technology (RUET)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">International Competitions</h3>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold leading-6">
                        World Asian Case Competition (WACC) View Certificate <br />
                        <a href="https://drive.google.com/file/d/10wme7m2p-9ljI_EhkOmXl4B0w1DO3ezv/view" target="_blank" rel="noopener noreferrer">
                          <button className="hover:text-white btn btn-xs btn-outline btn-success ">view certificate</button>
                        </a>
                      </h4>
                      <p className="mt-2     ">
                        <span className="font-bold">Organized by:</span> Academy of Asian Business (AAB), Korea
                      </p>
                      <p className="mt-2     ">
                        <span className="font-bold">Achievement:</span> Honourable Mention Award; facilitated publication in AAB journal
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold leading-6    ">
                        HULT Prize, Asian Regional Round <br />
                        <a href="https://drive.google.com/file/d/1JDNMSi5Zs5GHyKA-Dn2CkoPyUHOBIuy5/view" target="_blank" rel="noopener noreferrer">
                          <button className="hover:text-white btn btn-xs btn-outline btn-success ">view certificate</button>
                        </a>
                      </h4>
                      <p className="mt-2     ">
                        <span className="font-bold">Organized by:</span> HULT Prize Foundation, USA
                      </p>
                      <p className="mt-2     ">
                        <span className="font-bold">Achievement:</span> Regional finalist; represented Bangladesh at 2021 Bandung Impact Summit, Indonesia
                      </p>
                      <p className="mt-2     ">
                        <span className="font-bold">Key Contribution:</span> Designed a Sustainable and Renewable Energy based Food Supply Chain{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">National Competitions</h3>

              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold leading-6    ">
                      Face the Case Competition <br />
                      <a href="https://drive.google.com/file/d/1asJ2D4IyxY2AxhNCVlyyzF41e-lO54eN/view" target="_blank" rel="noopener noreferrer">
                        <button className="hover:text-white btn btn-xs btn-outline btn-success ">view certificate</button>
                      </a>
                    </h4>
                    <p className="mt-2">
                      <span className="font-bold">Organized by:</span> IEEE, Chittagong University of Engineering & Technology (CUET)
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Achievement:</span> 1st runner up.
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Key Contribution:</span> Conceptualization of an Affordable Aiding Device for Disabled Children in Off-Grid Regions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold leading-6">BISCM Supply Chain Research Challenge </h4>
                    <p className="mt-2     ">
                      <span className="font-bold">Organized by:</span> Bangladesh Institute of Human Resource Management (BIHRM)
                    </p>
                    <p className="mt-2     ">
                      <span className="font-bold">Achievement:</span> 11<sup>th</sup> place; awarded 70% scholarship for Supply Chain Engineering Management (SCEM) course
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6    ">
                      HULT Prize, RUET <br />
                      <a href="https://drive.google.com/file/d/1Z6ZfyBRgpQKNMUUH0_zc63vJ57yEDbw5/view" target="_blank" rel="noopener noreferrer">
                        <button className="hover:text-white btn btn-xs btn-outline btn-success ">view certificate</button>
                      </a>
                    </h4>
                    <p className="mt-2">
                      <span className="font-bold">Organized by:</span> HULT Committee, RUET (supervised by HULT Prize Foundation, USA)
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Achievement:</span> 2nd runner up
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold leading-6">Ptak Prize</h4>
                    <p className="mt-2">
                      <span className="font-bold">Organized by:</span> Mind Mapper, Bangladesh (supervised by ISCEA, USA)
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Achievement:</span> 60% scholarship for Certified Supply Chain Analyst (CSCA) certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
};

export default Achievements;

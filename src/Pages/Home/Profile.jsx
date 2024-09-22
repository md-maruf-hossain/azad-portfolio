import React from "react";

const Profile = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            I am A M Almas Shahriyar Azad. I thrive on the thrill of problem-solving—every small win bolsters my passion and drives me to keep learning. Critical thinking and brainstorming to solve
            challenges, especially with limited resources, is what excites me most. This passion fuels my research, where I'm not just seeking answers but pushing boundaries to create solutions that
            can truly make a difference.
          </p>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            My journey into research was ignited by a life-altering moment on January 21, 2018, when a devastating road accident left me severely injured. I was immediately taken to Rajshahi Medical
            College Hospital but was unable to receive a timely diagnosis of my internal injuries due to a power outage. As I endured the pain and helplessness, I promised to dedicate my life to
            research to drive change and uplift the underprivileged, ensuring no one else suffers in silence.
          </p>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Since recovering from the accident, I've been relentlessly pursuing research that blends sustainability with renewable energy, determined to reach and uplift every corner of the globe.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none">
              DOWNLOAD MY RESUME
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow me</div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                {/* Social media icons */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src="/src/assets/profile.JPG" alt="Profile" />
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
          Engineer | Researcher
          <br className="hidden md:block" />
        </h2>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-100 text-gray-900 my-10">
      <div className="container grid grid-cols-12 mx-auto">
        {/* img starts */}
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
          <img src="/src/assets/profile.JPG" alt="proile picture" />
          <h2 className="mt-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">Engineer | Researcher</h2>
        </div>
        {/* text */}
        <div className="flex flex-col col-span-12 p-6 lg:col-span-6 lg:p-10 text-justify text-xl">
          <div className="pt-6 pb-4 space-y-2">
            I am A M Almas Shahriyar Azad. I thrive on the thrill of problem-solving—every small win bolsters my passion and drives me to keep learning. Critical thinking and brainstorming to solve
            challenges, especially with limited resources, is what excites me most. This passion fuels my research, where I'm not just seeking answers but pushing boundaries to create solutions that
            can truly make a difference.
          </div>
          <div className="pt-6 pb-4 space-y-2">
            My journey into research was ignited by a life-altering moment on January 21, 2018, when a devastating road accident left me severely injured. I was immediately taken to Rajshahi Medical
            College Hospital but was unable to receive a timely diagnosis of my internal injuries due to a power outage. As I endured the pain and helplessness, I promised to dedicate my life to
            research to drive change and uplift the underprivileged, ensuring no one else suffers in silence.
          </div>
          <div className="pt-6 pb-4 space-y-2">
            {" "}
            Since recovering from the accident, I've been relentlessly pursuing research that blends sustainability with renewable energy, determined to reach and uplift every corner of the globe.
          </div>
          <div className="pt-6 pb-4 space-y-2">
            {" "}
            <a rel="noopener noreferrer" href="almas-shahriar-azad-resume.pdf" download="almas-shahriar-azad-resume.pdf">
              <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none">
                DOWNLOAD MY RESUME
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

const Profile = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 pb-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class="mb-8 leading-relaxed text-justify">
            I am A M Almas Shahriyar Azad. I thrive on the thrill of problem-solving—every small win bolsters my passion and drives me to keep learning. Critical thinking and brainstorming to solve
            challenges, especially with limited resources, is what excites me most. This passion fuels my research, where I'm not just seeking answers but pushing boundaries to create solutions that
            can truly make a difference.
          </p>
          <p class="mb-8 leading-relaxed text-justify">
            My journey into research was ignited by a life-altering moment on January 21, 2018, when a devastating road accident left me severely injured. I was immediately taken to Rajshahi Medical
            College Hospital but was unable to receive a timely diagnosis of my internal injuries due to a power outage. As I endured the pain and helplessness, I promised to dedicate my life to
            research to drive change and uplift the underprivileged, ensuring no one else suffers in silence. This personal experience fuels my passion for academic writing and research, motivating me
            to create impactful work that resonates beyond the pages.
          </p>
          <p class="mb-8 leading-relaxed text-justify">
            Since recovering from the accident, I've been relentlessly pursuing research that blends sustainability with renewable energy, determined to reach and uplift every corner of the globe.
            Even though I come from a third-world country with limited access to cutting-edge labs and funding, my vision remains bold and unwavering. I'm now seeking opportunities for higher studies
            to deepen my expertise and join forces with passionate teams to create a lasting, global impact.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded font-semibold">DOWNLOAD MY RESUME</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded shadow-lg" alt="hero" src="/src/assets/profile.JPG" />
          <p className="text-center text-xl font-semibold uppercase">Engineer | Researcher</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import React from "react";

const Hobbies = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">Hobbies</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Here are some of my hobbies that I enjoy during my free time.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                {/* <!-- Travelling SVG --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-map"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Travelling</h2>
              <p class="leading-relaxed text-base">Exploring new destinations and experiencing different cultures.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                {/* <!-- Reading Novels SVG --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Reading Novels</h2>
              <p class="leading-relaxed text-base">Diving into different worlds and stories through books.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                {/* <!-- Photography SVG --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-camera"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Photography</h2>
              <p class="leading-relaxed text-base">Capturing moments and the beauty of the world through the lens.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                {/* <!-- Listening to Music SVG --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-music"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Listening to Music</h2>
              <p class="leading-relaxed text-base">Enjoying a wide range of genres to keep the mind relaxed and entertained.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

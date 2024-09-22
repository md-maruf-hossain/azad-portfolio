import React from "react";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 text-center">
      {/* Large 404 text */}
      <img src="/src/assets/error404/undraw_page_not_found_re_e9o6.svg" alt="" />

      {/* Error message */}
      <br />
      {/* Additional error text */}
      <p className="text-md text-gray-600 mb-8">
        Sorry, we couldn't find this page. <br />
        But don't worry, you can find plenty of other things on our homepage.
      </p>

      {/* Button to go back home */}
      <button onClick={() => (window.location.href = "/")} className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
        Go Back Home
      </button>
    </div>
  );
};

export default Errorpage;

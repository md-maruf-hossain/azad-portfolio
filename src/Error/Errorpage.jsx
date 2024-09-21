import React from "react";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 text-center">
      {/* Large 404 text */}
      <h1 className="text-9xl font-bold mb-4 text-red-600">404</h1>

      {/* Error message */}
      <p className="text-xl mb-4 text-red-600">Oops! Looks like you're lost.</p>

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

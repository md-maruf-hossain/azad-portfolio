import React from "react";

const GetInTouch = () => {
  return (
    <section className="text-white pb-10">
      <div className="container mx-auto bg-green-600 flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Get in Touch for more update</h1>
        <a href="mailto:aaaarnab1234@gmail.com" title="Email" rel="noopener noreferrer" className="hover:underline">
          <button className="px-8 py-3 text-lg font-semibold rounded bg-white text-green-600">Contact</button>
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;

import React from "react";

const MyFamily = () => {
  return (
    <div className="text-justify py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">My Family</h1>
        <div className="space-y-10">
          {/* Father Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-600">Father - Mechanical Engineer</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
              My father, a seasoned Mechanical Engineer, played a vital role in sparking my curiosity about engineering. As a child, he would often take me to his factory. I can still remember the awe
              I felt when I first saw the towering boiler, the roaring diesel generator, and the immense paper machine. The sheer size and thunderous noise of these machines left me spellbound, and it
              was in that moment I decided—someday, I too would become an engineer.
            </p>
          </div>

          {/* Mother Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-600">Mother - Inspiration Behind My Name</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
              My mother, with her boundless love and foresight, gave me the name ‘Arnab,’ which means "ocean" in Bengali. She dreamt that I would grow to be as vast in knowledge as the ocean
              itself—deep, expansive, and full of wisdom. Her dream continues to guide and inspire me in every step of my journey.
            </p>
          </div>

          {/* Sister Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-600">Ahona - My Best Friend and Learning Partner</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
              Ahona, my younger sister, is not just a sibling but also my best friend and learning partner. Like me, she is an engineering enthusiast and has even become involved in some of my
              projects. Her creativity and energy constantly push me to think in new ways, making our shared ventures all the more exciting.
            </p>
          </div>

          {/* Family Group Photo */}
          <div className="flex justify-center">
            <img src="/src/assets/myfamily.JPG" alt="Family Group" className="w-full max-w-3xl h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFamily;

import React from "react";

const Academic = () => {
  const educationData = [
    {
      institution: "Rajshahi University of Engineering & Technology",
      degree: "B.Sc. (Engg.) in Industrial & Production Engineering (IPE)",
      cgpa: "CGPA: 3.31 (3.79 in Final Academic year, Final 41.75 credits) on a scale of 4.00",
      passingYear: "Passing year: 2024",
      category: "University",
      imageUrl: "/src/assets/education/ruet-monogram-1545x1850.png", // Replace with actual image path
    },
    {
      institution: "Notre Dame College, Dhaka",
      degree: "Higher Secondary Certificate",
      cgpa: "GPA: 5.00 on a scale of 5.00",
      passingYear: "Passing year: 2017",
      category: "College",
      imageUrl: "/src/assets/education/ndc.png", // Replace with actual image path
    },
    {
      institution: "AK School and College, Dhaka",
      degree: "Secondary School Certificate",
      cgpa: "GPA: 5.00 on a scale of 5.00",
      passingYear: "Passing year: 2015",
      category: "School",
      imageUrl: "/src//assets/education/akschool.png", // Replace with actual image path
    },
  ];
  return (
    <div>
      <p className="text-center text-4xl font-bold my-10">Academic Qualifications</p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationData.map((edu, index) => (
              <div className="p-4" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 mx-auto mt-4 object-center" src={edu.imageUrl} alt={edu.institution} />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{edu.category}</h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">{edu.institution}</h1>
                    <p className="leading-relaxed mb-3">{edu.degree}</p>
                    <p className="leading-relaxed mb-3">{edu.cgpa}</p>
                    <p className="leading-relaxed mb-3">{edu.passingYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;

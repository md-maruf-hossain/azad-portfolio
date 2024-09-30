import React from "react";

const Cetificastion = () => {
  const certifications = [
    {
      category: "Certification",
      title: "Certified Supply Chain Analyst (CSCA)",
      description: "Achieved a distinguished score of 96% in certification provided by the International Supply Chain Education Alliance (ISCEA), Cleveland, Ohio, USA.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/1KQ8w1atqe6Pmx7u29E85GqJVf2QdXBdW/view", // Replace with the actual certificate URL
    },
    {
      category: "Training",
      title: "Industrial Attachment at Mir Concrete Products Limited",
      description: "Extensive training on Programmable Logic Controller, Energy Savings, Testing Raw materials, Logistics, Operations, and Quality control.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/10tEIRt7gIpV7qQ0Mhp0UWZazeTvfncKi/view", // Replace with the actual training certificate URL
    },
  ];

  return (
    <div>
      <section className="body-font">
        <div className="container px-5 pb-10 mx-auto">
          <p className="text-center text-4xl font-bold my-10">Certifications and Training</p>

          <div className="flex flex-wrap -m-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 lg:w-1/2 md:w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{cert.category.toUpperCase()}</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{cert.title}</h1>
                  <p className="leading-relaxed mb-3">{cert.description}</p>
                  <a className="text-green-500 inline-flex items-center" href={cert.linkUrl} target="_blank" rel="noopener noreferrer">
                    {cert.linkText}
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cetificastion;

import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Programming and Data Analysis",
      description: "Mastery of C, Java, Python, STATA, MATLAB, and SPSS for transforming raw data into actionable insights and innovative solutions.",
      icon: "🖥️", 
    },
    {
      title: "Machine Learning",
      description: "Experienced in developing and implementing machine learning algorithms, including optimization algorithms, predictive modelling and data analysis.",
      icon: "🤖",
    },
    {
      title: "Supply Chain Engineering",
      description: "Comprehensive understanding of supply chain dynamics, including logistics, operations planning, sourcing management, and strategy.",
      icon: "📦",
    },
    {
      title: "Mechatronics",
      description: "Proficient in integrating mechanical, electronic, and software engineering principles to develop advanced mechatronic systems.",
      icon: "⚙️",
    },
    {
      title: "Microsoft Office Suite",
      description: "Advanced user of Microsoft Word, PowerPoint, and Excel for documentation, presentations, and data analysis.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-gray-100 pb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">Skills</h2>
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-green-600 mb-2 text-center">{skill.title}</h3>
            <p className="text-gray-700 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

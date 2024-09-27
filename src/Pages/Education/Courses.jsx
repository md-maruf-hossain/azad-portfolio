import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Supply Chain Management",
      supervisor: "Rudolf Leuschner, Ph.D.",
      university: "Rutgers the State University of New Jersey, USA",
      skillsGained: [
        "Supply Chain and Logistics",
        "Supply Chain Systems Planning",
        "Strategy and Operations",
        "Leadership and Management",
        "Operations Management",
        "Business Analysis",
        "Critical Thinking",
        "Data Analysis",
        "Spreadsheet Software Strategy",
        "Probability & Statistics",
      ],
      certificateLink: "https://www.coursera.org/account/accomplishments/specialization/YQKYV3U2XWEH",
    },
    {
      id: 2,
      title: "Supply Chain Principles",
      supervisor: "Timothy M Brown",
      university: "Georgia Institute of Technology, Atlanta, Georgia, USA",
      skillsGained: ["Leadership and Management", "Supply Chain and Logistics", "Supply Chain Systems", "Operations Management", "Strategy and Operations Planning", "Business Analysis"],
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/LA6LDNYSLU96",
    },
    {
      id: 3,
      title: "Programming Fundamentals",
      supervisor: "Andrew D. Hilton, Genevieve M. Lipp, Anne Bracy",
      university: "Duke University, North Carolina, USA",
      skillsGained: [
        "Algorithms",
        "C Programming Language",
        "Computer Programming",
        "Critical Thinking",
        "Problem Solving",
        "Programming Principles",
        "Theoretical Computer Science",
        "Data Visualization",
      ],
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/4XUTEB3FQD9Q",
    },
    {
      id: 4,
      title: "Crash Course on Python",
      supervisor: "Google",
      university: "Google",
      skillsGained: ["Python Programming", "Python Syntax", "Python Data Structures", "Object-Oriented Programming (OOP)", "Fundamental Programming Concepts"],
      certificateLink: "https://coursera.org/share/dedf555a1d9908ef0097248b922ad7ba",
    },
    {
      id: 5,
      title: "How to Write and Publish a Scientific Paper",
      supervisor: "Mathis Plapp",
      university: "Ecole Polytechnique, France",
      skillsGained: ["Scientific Paper Outline", "Journal Selection", "Submission Readiness Checklist", "Application of Scientific Writing and Publishing"],
      certificateLink: "https://coursera.org/share/fae3943a30a529a6bd8dc8b6a7c000a7",
    },
  ];

  return (
    <div>
      <p className="text-center text-4xl font-bold py-10">Certifications and Training</p>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pb-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {courses.map((course) => (
              <div key={course.id} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="text-xl lg:text-2xl font-semibold title-font text-gray-700">{course.title}</span>
                  <span className="mt-1 text-gray-500 text-sm">{course.university}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    <span className="font-semibold">Course Supervisor:</span> {course.supervisor}
                  </h2>
                  <p className="leading-relaxed">
                    <span className="font-semibold">Skills gained:</span> {course.skillsGained.slice(0, 5).join(", ")}...
                  </p>
                  <a href={course.certificateLink} target="_blank" rel="noopener noreferrer" className="text-green-500 inline-flex items-center mt-4">
                    View Certificate
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

export default Courses;

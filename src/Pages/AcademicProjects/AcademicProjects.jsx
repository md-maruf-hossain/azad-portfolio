import React from "react";
import Hero from "../../Components/Hero";

const AcademicProjects = () => {
  const quotes = {
    name: "Bill Gates",
    quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
  };
  //
  const projects = [
    {
      title: "Modeling an Optimal and Sustainable Renewable Energy Supply Chain for Rural Electrification in Bangladesh: A Simulation-Based Approach",
      courseTitle: "Project & Thesis",
      courseNo: "IPE 4200",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/1DHi8KRnEK5OQuT6YYMiRvsfSj9O7BB7K/view", // Replace # with your report link
      overview: [
        "Bangladesh has been facing difficulties in producing and supplying necessary electricity as per national power demand because of energy shortage. In this situation, larger energy supplies with greater efficiency are necessary to meet the basic needs of the growing population in national grid connected and off grid areas. The particular aim of this study is to propose a renewable energy supply chain for rural electrification in Bangladesh by maintaining an equilibrium condition between the cost and sustainability of the supply chain. The meteorological data of the study location Char Nizam, which is a remote off grid island in Bangladesh was collected and simulated in HOMER Pro software. The outcomes of the simulation generated seven feasible energy configurations for implementation in and considered as the study location with capital and operational costs and greenhouse gas emissions. The energy configurations were modeled in openLCA software to determine the environmental footprint of each of the energy supply chains through the Life Cycle Assessment Methodology. The cost criteria obtained from HOMER Pro and the environmental impact criteria obtained through openLCA and HOMER Pro were divided into several sub-criteria. To assess the objective weights each of the sub criteria, the Entropy Method was implemented. Using the objective weights, the sub criteria and finally by considering both cost and environmental impact criteria equally significant, all the seven energy supply chains were ranked using TOPSIS in Python Interface. The result of this study indicates that “PV-Wind Turbine- Biomass Generator - Li-ion Battery - Converter” is the best energy configuration for the study location in terms of cost-effectiveness and sustainability. By exemplifying the outcome, in the realm of energy system modeling, this research aims to add a unique contribution by proposing the methodology of considering cost and sustainability equally important for national and global implications.",
      ],
    },
    {
      title: "Design an Automatic Night Lamp using Light Dependent Resistor (LDR) to Reduce Energy Consumption for a Sustainable Future",
      courseTitle: "Measurement and Instrumentation Lab",
      courseNo: "IPE 4122",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/186Rj-fOxTnIM40eUrMCSGU2SIH8SGCII/view", // Replace # with your report link
      overview: [
        "The project focuses on creating a cost-effective and energy-efficient solution for night lighting. Traditional night lamps require manual operation, often leading to unnecessary energy usage when left on during daylight. The proposed system addresses this issue by automating the process of turning the lamp on and off, based on the surrounding light intensity, using an LDR sensor. This automation not only ensures convenience but also contributes to energy conservation, which is vital for a sustainable future.",
        "The project's objectives include designing the lamp, understanding the working principle of LDRs, and reducing energy consumption. During performance analysis, the prototype showed successful functionality in the trials, with errors traced back to sensor positioning, which were corrected for the final design. The lamp finds applications in households, streets, gardens, and public places, offering significant benefits such as energy savings, enhanced security, and reduced manual errors.",
      ],
    },
    {
      title: "Aquaponics for a Sustainable Future: Enhancing Market Presence, Renewable Energy Deployment, and Environmental Responsibility",
      courseTitle: "Engineering Communication Seminar",
      courseNo: "IPE 4242",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/1wNCFSM-w9X7-lpI-6201fDtBmDpYAisL/view", // Replace # with your report link
      overview: [
        "This business plan presents a strategic approach to establishing a sustainable aquaponics business in Dhaka, Bangladesh, with a strong emphasis on renewable energy and environmental responsibility. Targeting B2B sales to super shops and restaurants, the plan outlines a five-year roadmap designed to create a solid market presence, achieve sustainable growth, and foster social and environmental impact. In the first year, the focus will be on developing energy-efficient aquaponics systems, integrating renewable energy solutions, and forming partnerships with key stakeholders. By the second year, the business aims to scale up production while optimizing energy consumption and delivery processes. In the third year, the priority will be to enhance operational efficiency through technological innovation and research in renewable energy applications. By the fourth year, the business plans to expand to other cities, implement eco-friendly practices in new regions, and strengthen its digital presence. In the fifth year, the company aspires to become a leading supplier of sustainably produced aquaponic products, exploring export opportunities and driving long-term environmental stewardship. Financial projections, a break-even analysis, and key objectives are outlined to ensure the business's success. By leveraging renewable energy, sustainable farming methods, and a commitment to environmental impact, this aquaponics business seeks to contribute positively to Bangladesh's agricultural landscape while promoting a greener, more sustainable future.",
      ],
    },
    {
      title: "Study of Optimal Replacement Interval for Capital Equipment (Concrete Pump): Minimization of Total Cost",
      courseTitle: "Materials Handling Lab",
      courseNo: "IPE 4204",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/1V3Q7LERqbi7UWvDaoZLq9Rh6oiROqg-c/view", // Replace # with your report link
      overview: [
        "This experiment investigates the optimal replacement interval for capital equipment, specifically concrete pumps, with the objective of minimizing total discounted costs. Concrete pumps are vital in large-scale construction projects, providing efficient transportation of liquid concrete to hard-to-reach locations. However, as capital equipment, they experience wear and tear over time, leading to increased maintenance costs and reduced resale value. This study applies a mathematical model to determine the optimal replacement interval for concrete pumps, considering the costs of maintenance, replacement, and the resale value over time. By collecting data from a concrete pump factory in Bangladesh by a filed survey, the model seeks to minimize the total cost over the equipment's lifespan. The study applies a discount rate to assess the present value of future costs and identifies the 10th year as the optimal replacement point. The findings offer construction companies insights into cost-effective equipment replacement strategies that can enhance operational efficiency, reduce project costs, and contribute to sustainable business practices by minimizing resource wastage.",
      ],
    },
    {
      title: "Designing and Prototyping an Affordable Robot to Help the Health Workers",
      courseTitle: "Product Design-II Sessional",
      courseNo: "IPE 3206",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/14iZKCMBFb-AWhAWRJ7lHbueyHo5uX311/view", // Replace # with your report link
      overview:
        "The product aims to help the frontline health workers by keeping them away from COVID-19 patients. Basically, it is an android controlled robot that will be able to serve the COVID infected patients. The robot will have four wheels for locomotion and will be able to carry its own weight. Based upon orders from the controller it can go to the patients to assist them. A tray will be mounted on the body of the robot for transporting medicine. To assist the patients, a robotic arm will be connected. Sensors for temperature and oxygen saturation measurement will be added. From a safer distance, a microphone and speaker will be utilized to instruct and listen to the patients. For turning this idea into reality, at first, a survey was conducted on the medical specialists to understand their needs. Analyzing the survey result, the customer needs of the products are identified and prioritized. In order to fulfill those needs functional structure for the product was developed. The functional structure of the product reveals various sub functionalities of the product and 'How' it will serve its purpose. Then with the help of Quality Function Deployment (QFD), the customer needs are converted into well-defined specifications so that the device can properly be functional. Using Computer Aided Designing (CAD), the detailed design of the product is represented. Finally, a prototype of the design is developed for performance analysis. In this serious pandemic situation, while every day numerous patients and people are dying, robotic technology is essential in Bangladesh. Though, indeed, this technology will not solve the pandemic crisis, it will empower humans significantly in the battle against viruses.",
    },
    {
      title: "Simulation of a Barber Shop Using Arena",
      courseTitle: "Industrial Simulation Lab",
      courseNo: "IPE 4108",
      grade: null,
      reportLink: "https://drive.google.com/file/d/1noXNujVrdxirphBEtt18Y1WqGxYDiai7/view", // Replace # with your report link
      overview: [
        "The project focuses on simulating a barber shop using Arena, a discrete event simulation software. The project aimed to analyze key operational metrics such as customer arrivals, service times, waiting times, and customer departures, based on real-world data collected from a barber shop in Munnafer Mor, Rajshahi. Data collection was conducted over three days, focusing on customer behavior and service processes during different time periods. Their analysis revealed a higher demand for services in the morning, attributed to seasonal preferences. Arena's Input Analyzer was employed to determine appropriate distributions for variables such as customer arrival time, waiting time, and service time, with lognormal and normal distributions ultimately chosen.",
        "In the simulation model, customer arrival patterns were mapped, along with decision points regarding whether customers would stay or leave, queue waiting times, and service distribution across three barber stations. The simulation results showed that, over a 14-hour operating period, 48 customers would visit the shop, with 37 receiving services and 11 departing without service due to extended wait times. The simulation identified inefficiencies in resource allocation within the barber shop. The project demonstrated how Arena simulation can offer valuable insights into optimizing service operations.",
      ],
    },
    {
      title: "Air Ticket Booking System",
      courseTitle: "Management Information System Sessional",
      courseNo: "IPE 3122",
      grade: "4.00 out of 4.00",
      reportLink: "https://drive.google.com/file/d/1m30KuBgvtlHemMjq5RnTwJZ9eYFAPE3b/view", // Replace # with your report link
      overview: null, // No overview as per your instructions
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero quotes={quotes} />
      <section className="w-11/12 mx-auto my-8 p-4  rounded-lg shadow-lg">
        <h2 className="text-4xl container mx-auto font-bold text-center text-green-600 mb-6">Academic Projects</h2>
        <h2 className="text-xl container mx-auto  text-center mb-6 w-11/12">
          Throughout my academic journey, I have consistently aligned my projects with my passion for sustainability and technology. Whether it's designing energy-efficient systems or creating
          automated solutions, I seize every opportunity to merge creativity with impact. During the COVID-19 crisis, I applied my skills to design a robot that aided health workers, showcasing my
          ability to innovate in times of need. In each project, I tried to emphasize innovation, renewable energy, and environmental responsibility, driving towards a sustainable and impactful
          future.
        </h2>
        <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-md">
          {projects.map((project, index) => (
            <details key={index} className="group p-4">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-gray-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-gray-900">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <button>
                  <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="inline-block text-green-600 hover:text-green-800 underline">
                    View Full Report
                  </a>
                </button>
                <p className="text-sm text-gray-500 text-justify">
                  {project.courseTitle} ({project.courseNo}) | Grade: {project.grade}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-gray-700 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600 text-justify">
                <p>{project.overview}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademicProjects;

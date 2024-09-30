import React from "react";
import Hero from "../../Components/Hero";

const CurrentResearchInitiatives = () => {
  const quotes = {
    name: "Albert Einstein",
    quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  };
  // details
  const projects = [
    {
      title: "Conceptualization of a Sustainable and Affordable Solar Powered Concrete Wastewater Treatment Facility: A Lifecycle Assessment-Based Approach",
      fundedBy: "Research & Extension, Rajshahi University of Engineering & Technology (RUET).",
      supervisor: {
        name: "Md. Ariful Haque",
        link: "https://www.ipe.ruet.ac.bd/arifulhaqueruet",
        position: "Assistant Professor, Department of Industrial & Production Engineering (IPE), Rajshahi University of Engineering & Technology (RUET).",
      },
      overview: [
        `Concrete wastewater, generated from operations like washing trucks, mixers, and tools, contains hazardous materials that can degrade water quality and pose risks to human health and aquatic ecosystems. While developed nations have technologies to recycle this wastewater, the feasibility of such systems in developing countries like Bangladesh is limited due to high costs, inadequate infrastructure, and lack of suitable technology.`,
        `This study aims to create a cost-effective, sustainable system for concrete wastewater recycling, focusing on using solar power to make the process more environmentally friendly. The project involves designing a 20-liter water tank with multiple chambers to settle suspended solids, filter pollutants, and aerate the wastewater using solar-powered systems. This innovative approach will not only help reduce pollution but also conserve fresh underground water resources, which are under significant pressure.`,
        `The research will utilize a lifecycle assessment to compare the environmental impacts of untreated versus treated concrete wastewater. The expected outcomes include reduced suspended solids, fewer pollutants, and improved water quality through organic pollutant breakdown. By integrating solar energy into the treatment process, the project highlights the potential for renewable energy solutions in industrial wastewater management, offering practical insights for sustainable construction practices in developing countries.`,
      ],
    },
    {
      title: "Forecasting Future CO2 Emissions in Bangladesh and Assessing Uncertainty: A MLSTM Approach with Monte Carlo Simulation and Impact Factor Analysis of Environmental Policy",
      supervisor: {
        name: "Md. Rakibul Islam",
        link: "https://www.ipe.ruet.ac.bd/Md%20Rakibul%20Islam",
        position: "Assistant Professor, Department of Industrial & Production Engineering (IPE), Rajshahi University of Engineering & Technology (RUET).",
      },
      overview: [
        `This study introduces an innovative and detailed approach for predicting CO2 emissions in Bangladesh up to 2040. Utilizing a data-driven approach, the forecasts were generated through a multivariate Long Short-Term Memory (mLSTM) neural network, which adeptly manages the complex interactions among 17 key parameters affecting CO2 emissions.`,
        `The effectiveness of these predictions is enhanced by the mLSTM model's ability to capture intricate correlations among various multidimensional factors. To address the inherent uncertainties in environmental modeling, this study also integrates Monte Carlo Simulation, thereby adding robustness to the research. This combination of mLSTM predictions with Monte Carlo simulation not only delivers a highly accurate CO2 emission forecast but also offers a nuanced view of the uncertainties and the impact of each contributing factor.`,
        `The findings suggest that 2039 will experience the peak in CO2 emissions, with solid fuel consumption being a major contributing factor. These insights are crucial for policymakers, governing bodies, and environmental stakeholders, as they provide valuable guidance for the development of adaptive and effective mitigation strategies.`,
      ],
    },
    {
      title: "Understanding Sustainable Food Waste Management: Analyzing Global Consequences, Personal Beliefs, and Consumer Attitudes Through Latent Variable Modeling",
      supervisor: {
        name: "Dr. Mahadi Hasan Masud",
        link: "https://www.me.ruet.ac.bd/masud.08ruet",
        position: "Assistant Professor, Department of Mechanical Engineering (ME), Rajshahi University of Engineering & Technology (RUET).",
      },
      overview: [
        `This study employs survey-based primary data and complex big data analytics to explore sustainable food waste management. By analyzing key latent variables—Global Consequences and Causes (GCC), Personal Beliefs (PB), Attitudes Towards Leftovers (AL), Conscious Consumption and Advocacy (CCA), Waste for Appearance and Expiry (WAE), and Awareness (AW)—the research provides insights into factors influencing food waste and sustainability practices.`,
        `The factor loadings demonstrate how these variables impact food waste management. Findings reveal that increased awareness (AW) leads to more positive attitudes towards leftovers (AL) and reduces waste related to appearance and expiry (WAE). Additionally, positive attitudes towards leftovers (AL) foster greater engagement in conscious consumption and advocacy (CCA), promoting sustainable practices.`,
        
        `Reliability and validity are confirmed through tests such as Cronbach’s Alpha and Composite Reliability, and discriminant validity is ensured using the Fornell-Larcker Criterion. Mediation analysis further illustrates how awareness and attitudes influence food waste behaviors and sustainable management practices.
  
        Demographic analysis highlights variations in food waste behaviors based on factors like monthly food spending and respondent city. The integration of survey data with advanced big data analytics underscores the importance of data-driven approaches in developing effective strategies for sustainable food waste management. This comprehensive analysis provides valuable insights for policymakers and stakeholders, aiding in the creation of targeted interventions to reduce food waste and enhance sustainability.`,
      ],
    },
  ];

  return (
    <div>
      <Hero quotes={quotes} />

      <div className="bg-gray-100 min-h-screen p-6 text-justify">
        <h1 className="text-3xl font-bold text-center mb-8">Current Research Initiatives</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-2">
                <strong>Supervisor: </strong>
                <a href={project.supervisor.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.supervisor.name}
                </a>
                , {project.supervisor.position}
              </p>
              {project.fundedBy && (
                <p className=" mb-2">
                  <strong>Funded by:</strong> {project.fundedBy}
                </p>
              )}
              <div className=" mt-4 text-justify">
                {project.overview.map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentResearchInitiatives;

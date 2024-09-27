import React from "react";

const Conference = () => {
  const journals = [
    {
      title: "Assessment of Energy Consumption and Emissions of Fabric Production Lines in Bangladesh",
      figure_title: "Monthly Production and Energy Consumption Metrics in the Assessed Fabric Production Line",
      authors: ["Khaled Mohammad Shifullah Bhuiya, A M Almas Shahriyar Azad, et al."],
      publisher: "SSRN (Elsevier)",
      year_of_publication: "2024",
      publication_status: "Published",
      Conference: "International Conference on Mechanical Engineering (ICME, BUET)",
      overview:
        "This research paper provides an in-depth analysis of energy consumption and emissions in the production of knitted fabric, focusing on the knitting, dyeing, and finishing stages. Data were gathered through field surveys at a prominent textile factory, capturing energy inputs from natural gas, diesel, and electricity, with emissions calculated using national conversion factors. Specific Energy Consumption (SEC) was used as an efficiency metric, showing seasonal variations, with the highest SEC observed in February (28.59 GJ per ton) and the lowest in December (16.63 GJ per ton). Natural gas accounted for 98% of total energy consumption, while diesel and electricity played minimal roles. CO2 emissions mirrored energy usage, peaking in February and tapering off in December, with an annual average of approximately 15,000 kg of CO2 emissions per ton of fabric. Additionally, it was estimated that producing one ton of fabric generates an equivalent of 29,250 kg of CO2. The study underscores the significant energy demands in knitted fabric production, identifying natural gas as the predominant energy source. These findings offer actionable insights for textile factories in Bangladesh, helping them pinpoint energy-intensive operations and implement strategies to reduce consumption and improve efficiency in their production processes.",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4859374",
      img: "/src/assets/conference/conference-01.png",
    },
    {
      title: "Integrated Framework for Investigating Relationship Between Overall Equipment Effectiveness (OEE) and Downtime",
      figure_title: "Overall Equipment Effectiveness and Machine Parameters over Six Days",
      authors: ["Md. Ariful Haque, A M Almas Shahriyar Azad, Moumita Ghosh, Zarin Tasnim Oishi, Md. Mohibul Islam"],
      publisher: "International Conference on Industrial & Mechanical Engineering and Operations Management (IEOM)",
      year_of_publication: "2022",
      publication_status: "Published",
      Conference: "International Conference on Industrial & Mechanical Engineering and Operations Management (IEOM)",
      overview:
        "o	In modern industries, optimizing the utilization of available equipment and machinery is a key priority. Enhancing equipment efficiency can be achieved through the effective application of overall equipment effectiveness (OEE). This study evaluates equipment efficiency by analyzing OEE, utilizing data from a leading manufacturing company over six days from two shifts to assess the current OEE levels. Downtime data was also collected, and the relationship between OEE and downtime was explored, revealing a negative correlation. The study identifies the primary causes of downtime and demonstrates how implementing total productive maintenance (TPM) can mitigate downtime and improve OEE. The impact of availability rate, performance rate, and quality rate on OEE was further examined, with availability rate showing the strongest correlation. A limitation of this study is the absence of data on OEE improvement after TPM implementation. Nevertheless, the findings offer valuable insights for industry professionals aiming to enhance productivity and profitability through OEE optimization.",
      url: "https://index.ieomsociety.org/index.cfm/article/view/ID/13334",
      img: "/src/assets/conference/conference-02.png",
    },
    {
      title: "Overall Equipment Effectiveness (OEE) Calculation in Manufacturing Industries: A Case Study",
      figure_title: "3D View of Overall Equipment Effectiveness and its Components",
      authors: ["Md. Ariful Haque, A M Almas Shahriyar Azad, et al"],
      publisher: "International Conference on Mechanical, Industrial and Materials Engineering (ICMIME)",
      year_of_publication: "2022",
      publication_status: "Published",
      Conference: "International Conference on Mechanical, Industrial and Materials Engineering (ICMIME, RUET, 2022)",
      overview:
        "Overall Equipment Effectiveness (OEE) is a measurement of how well a manufacturing operation uses its resources. Understanding the underlying losses of the manufacturing system and monitoring the OEE of the equipment can enhance the utilization of equipment. In this study, the availability rate, performance rating, and quality rate of the machines were calculated to determine the OEE of the production system. This framework has been applied to calculate the OEE by using data from machines from one of the top mobile manufacturing industries of Bangladesh. The findings revealed that over dependency on the maintenance team and idle time due to gluing operations for single operators, and single shift operations were responsible for the lower value of the OEE. Autonomous maintenance, an increasing number of shifts and the application of the Andon system by the operators can increase the availability rate as well as the OEE of the machines in the production system.",
      url: "https://www.researchgate.net/publication/371835347_Overall_Equipment_Effectiveness_OEE_Calculation_in_Manufacturing_Industries_A_Case_Study",
      img: "/src/assets/conference/conference-03.png",
    },
  ];
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Conference Proceedings</h1>
      {journals.map((journal, i) => (
        <section className="text-gray-600 body-font mb-10" key={i}>
          <div className="container mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden shadow-lg">
                <img alt="content" className="h-full w-full" src={journal.img} />
              </div>
              <p className="text-center mt-2 text-sm text-gray-500">{journal.figure_title}</p>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                  <div>
                    <h2 className="font-medium title-font text-gray-900 text-lg">Authors:</h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <ul className="list-disc pl-5">
                      {journal.authors.map((author, index) => (
                        <li key={index} className="text-gray-700">
                          {author}
                        </li>
                      ))}
                    </ul>
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Publisher: {journal.publisher}</h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Year of Publication: {journal.year_of_publication}</h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Publication Status: {journal.publication_status}</h2>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="title-font text-xl font-bold text-green-600 mb-3 text-justify">{journal.title}</h2>
                  <p className="leading-relaxed text-lg mb-4 text-justify">{journal.overview}</p>
                  <a href={journal.url} target="_blank" rel="noopener noreferrer" className="text-green-500 inline-flex items-center">
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Conference;

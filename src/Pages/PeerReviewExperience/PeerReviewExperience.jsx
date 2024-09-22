import React from "react";
import Hero from "../../Components/Hero";

const PeerReviewExperience = () => {
  const quotes = {
    name: "Voltaire",
    quote: "The more I read, the more I acquire, the more certain I am that I know nothing.",
  };
  return (
    <div>
      <Hero quotes={quotes} />
      <div className="container mx-auto text-justify flex flex-col justify-center items-center">
        <h2 className="title-font text-4xl font-bold text-green-600 mt-6 mb-3 text-center">Peer Reviewing Journey</h2>
        <p className="leading-relaxed w-3/4 text-lg">
          Peer reviewing has been a significant part of my academic journey, sharpening my knowledge, developing my attention to detail, and deepening my sense of responsibility towards the scientific
          community. With every manuscript, I strive not only to uphold academic integrity but also to contribute meaningfully to the advancement of research. Through critical analysis and thoughtful
          feedback, I aim to inspire innovation, promote interdisciplinary insights, and ensure that each study I review reaches its full potential.
        </p>
        <h2 className="title-font text-2xl mt-6 mb-3 font-bold text-green-600 ">Reviewer & Contributions</h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10">
            <div className="w-full sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <img alt="Peer Reviewing" className="object-cover object-center h-full w-full pb-3" src="/src/assets/peerreview/1.jpg" />
              </div>
              <p className="leading-relaxed text-base text-center">
                <strong>
                  Reviewer, Thermal Science and Engineering, EnPress Journals. <br /> (March 20, 2024 - Present)
                </strong>
                <br /> <p className="font-semibold text-green-600 text-left mb-2">Key Responsibilities:</p>
                <ul className="list-disc list-inside text-left">
                  <li>Assess originality and novelty by determining the manuscript’s contribution to advancing the field.</li>
                  <li>Evaluate ethical considerations in research methods and data handling.</li>
                  <li>Provide actionable feedback to enhance the manuscript's quality and impact.</li>
                </ul>
              </p>
            </div>
            {/*  */}
            <div className="w-full sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <img alt="Reviewer Roles" className="object-cover object-center h-full w-full pb-3" src="/src/assets/peerreview/2.jpg" />
              </div>
              <p className="leading-relaxed text-base text-center">
                <strong>Certificate of Excellence in Reviewing, Journal of Energy Research and Reviews, Sciencedomain International</strong>
                <br />
                <p className="text-green-600 font-semibold text-left pb-3">Key Contributions:</p>
                <ul className="list-disc list-inside text-left">
                  <li>Suggest innovative enhancements to the study’s approach or analysis that could reveal new insights or applications.</li>
                  <li>Highlight broader implications by connecting the research findings to real-world challenges or potential interdisciplinary applications.</li>
                  <li>Encourage interdisciplinary perspectives by suggesting how integrating insights from other fields could enrich the study's outcomes and relevance.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeerReviewExperience;

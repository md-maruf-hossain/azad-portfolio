import React from 'react';
import Hero from '../../Components/Hero';

const AcademicProjects = () => {
    const quotes = {
        name: "Bill Gates",
        quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
      };
    return (
        <div>
            <Hero quotes={quotes} />
            Academic Projects
        </div>
    );
};

export default AcademicProjects;
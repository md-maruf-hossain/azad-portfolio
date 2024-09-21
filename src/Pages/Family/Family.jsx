import React from 'react';
import Hero from '../../Components/Hero';

const Family = () => {
    const quotes = {
        name: "George Bernard Shaw",
        quote: "A happy family is but an earlier heaven.",
      };
    return (
        <div>
            <Hero quotes={quotes} />
            Family
        </div>
    );
};

export default Family;
import React from 'react';
import Hero from '../../Components/Hero';

const PeerReviewExperience = () => {
    const quotes = {
        name: "Voltaire",
        quote: "The more I read, the more I acquire, the more certain I am that I know nothing.",
      };
    return (
        <div>
            <Hero quotes={quotes} />
            Peer Review Experience
        </div>
    );
};

export default PeerReviewExperience;
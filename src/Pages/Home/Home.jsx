import React from 'react';
import Hero from '../../Components/Hero';
import Profile from './Profile';
import ResearchInterest from './ResearchInterest';
import Skills from './Skills';
import Update from './Update';
import GetInTouch from './GetInTouch';

const Home = () => {
    const quotes = {
        name: "Marie Curie",
        quote: "I am among those who think that science has great beauty. A scientist in his laboratory is not only a technician; he is also a child placed before natural phenomena which impress him like a fairy tale."
    }
    return (
        <div>
            <Hero quotes={quotes}/>
            <Profile/>
            <ResearchInterest/>
            <Skills/>
            <Update/>
            <GetInTouch/>
        </div>
    );
};

export default Home;
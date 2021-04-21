import React from 'react'
import TestContainer from '../testContainer/testContainer';
import './challengeSection.css';

const ChallengeSection = () => {
    return (  
      <div className="challenge-section-container">
       <h1 data-aos="fade-down" 
       className="challenge-section-header"
                 
       >
           Take Speed Test Now!
       </h1>
       <TestContainer words={3}  characters={13} wpm={40}  />

      </div>

    );
}
 
export default ChallengeSection;
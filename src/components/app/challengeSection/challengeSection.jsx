import React from 'react'
import TestContainer from '../testContainer/testContainer';
import './challengeSection.css';

const ChallengeSection = ({selectedparagraph,words,characters,wpm,timeRemaining,timeStarted}) => {
    return (  
      <div className="challenge-section-container">
       <h1 data-aos="fade-down" 
       className="challenge-section-header"
                 
       >
           Take Speed Test Now!
       </h1>
       <TestContainer
       selectedparagraph={selectedparagraph}
       timeRemaining={timeRemaining}
       words={words}  characters={characters} wpm={wpm}  />

      </div>

    );
}
 
export default ChallengeSection;
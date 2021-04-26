import React from 'react'
import TestContainer from '../testContainer/testContainer';
import './challengeSection.css';

const ChallengeSection = ({selectedParagraph,testInfo,words,characters,wpm,timeRemaining,timeStarted}) => {
  
  console.log(selectedParagraph,wpm,timeRemaining,words,characters)
  
    return (  
      <div className="challenge-section-container">
       <h1 data-aos="fade-down" 
       className="challenge-section-header"
                 
       >
           Take Speed Test Now!
       </h1>
       <TestContainer
       
       selectedparagraph={selectedParagraph}
       timeRemaining={timeRemaining}
       words={words}  characters={characters} wpm={wpm} 
       testInfo={testInfo} />

      </div>

    );
}
 
export default ChallengeSection;
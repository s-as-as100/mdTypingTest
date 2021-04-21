import React from 'react'

import './testContainer.css';
import TryAgain from './../tryAgain/tryAgain';
import TypingChallengeContainer from '../typingChallengeContainer/typingChallengeContainer';


const TestContainer = ({words,characters,wpm}) => {
    return (  
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-cont">
                <TypingChallengeContainer 
                words= {words} 
                characters={characters}
                wpm={wpm} />
            </div>
            {/* <div className="try-again-cont">
               <TryAgain words={words}characters={characters}  wpm={wpm}  />
            </div> */}
             
        </div>
    );
}
 
export default TestContainer;
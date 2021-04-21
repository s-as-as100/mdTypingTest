import React from 'react'
import ChallengeDetailsCard from '../challengeDetailsCard/challengeDetailsCard';
import "./typingChallengeContainer.css";


const TypingChallengeContainer = ({words,characters,wpm}) => {
    return ( 
         <div className="typing-challenge-container">
          
        <div className="details-container">
             
                <ChallengeDetailsCard  
                  cardName="words" cardValue={words}
                />
                 
            
                <ChallengeDetailsCard  
                 cardName="characters" cardValue={characters}
                />
             
            
                <ChallengeDetailsCard 
                cardName="wpm"  cardValue={wpm}
                
                />
            
        </div>
        <div className="typewriter-container">
            <p> This is the Real CHALLENGE</p>
        </div>
    
         </div>
     );
}
 
export default TypingChallengeContainer;
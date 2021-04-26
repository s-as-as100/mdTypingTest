import React from 'react'
import './typingChallenge.css';

const TypingChallenge = ({selectedParagraph,timeRemaining,timeStarted}) => {
    return (  
        <div className="typing-challenge">
            <div className="typing-container">
                <p className="timer">00
                :{timeRemaining  >= 10 ? timeRemaining: `0{timeRemaining }` }</p>
                <p className="timer-information">
                {!timeStarted && "start typing to start the test" }
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                     {selectedParagraph}
                    </div>

                </div>
                <div className="textarea-right">
                          <textarea 
                          className="textarea"
                          placeholder=" Start typing here"
                          >

                          </textarea>
                </div>
            </div>

        </div>
    );
}
 
export default TypingChallenge;
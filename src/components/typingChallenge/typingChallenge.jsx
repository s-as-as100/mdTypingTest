import React from 'react'
import './typingChallenge.css';

const TypingChallenge = ({selectedParagraph}) => {
    return (  
        <div className="typing-challenge">
            <div className="typing-container">
                <p className="timer">00:60</p>
                <p className="timer-information">
                    Start Typing
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
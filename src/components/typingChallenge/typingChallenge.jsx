import React from 'react'
import TestLetter from '../testLetter/testLetter';
import './typingChallenge.css';

const TypingChallenge = ({onInputChange,timeRemaining,timeStarted}) => {
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
                     {/* {selectedParagraph} */}

                     {
                         testInfo.map((individualLetterInfo) => {
                             return  (
                                 <TestLetter
                                 key={index} individualLetterInfo={individualLetterInfo} />
                             )
                         })
                     }
                    </div>

                </div>
                <div className="textarea-right">
                          <textarea 
                          onChange = {(e) =>onInputChange(e.target.value)}
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
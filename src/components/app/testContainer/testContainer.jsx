import React from "react";

import "./testContainer.css";
import TryAgain from "./../tryAgain/tryAgain";
import TypingChallengeContainer from "../typingChallengeContainer/typingChallengeContainer";

const TestContainer = ({selectedparagraph,words,characters,wpm,timeRemaining,timeStarted}) => {
 
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallengeContainer
            words={words}
            characters={characters}
            wpm={wpm}
            selectedparagraph={selectedparagraph}
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;

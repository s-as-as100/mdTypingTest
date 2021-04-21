import React from "react";
import './tryAgain.css';
 

const TryAgain = ({ characters, wpm, words }) => {
  return (
    <div className="try-again-container">
      <h1>Test Result</h1>
      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>wpm:</b> {wpm}
        </p>
        <p>
          <b>Speed:</b> {words}
        </p>
      </div>
      <div>
      <button
                    // onClick={() => startAgain()}
                    className="end-buttons start-again-btn"
                >
                    Re-try
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=#url"  +
                                
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons share-btn"
                >
                    Share
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                                
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
      </div>
    </div>
  );
};

export default TryAgain;
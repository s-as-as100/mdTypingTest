import React from 'react';
import "./testLetter.css";

const TestLetter = ( {inidividualLetterInfo}) => {

    const {status }= inidividualLetterInfo.status

    // let statusClass ;

    const statusClass = {
        correct : "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status]

    // if(status === "correct") {
    //     statusClass = "test-letter-correct"

    // } else if( status === "incorrect") {
    //     statusClass="test-letter-incorrect"

    // }  else {
    //     statusClass ="test-letter-not-attempted"
    // }

    return ( 
          <span className={`test-letter 
        ${statusClass}`}>
              {inidividualLetterInfo.testLetter}
          </span>
     );
}
 
export default TestLetter;
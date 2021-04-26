import React from 'react';
import Nav from './nav/nav';
import './App.css';
import Landing from './landing/landing';
import Footer from './footer/footer';
import ChallengeSection from './challengeSection/challengeSection';

const apiURl ="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
const timerStarted = 30;
class App extends React.Component {
    state = {
        selectedParagraph: "hi",
        timerStarted: false,
        testInfo: [],
        timeRemaining: timerStarted,
        words: 0 ,
        characters:0,
        wpm:0


          
        
    }
     
componentDidMount() {
    // fetch( apiURl)
    // .then(response => response.text())
    // .then((data) => {
    //     // console.log(data)
    //     this.setState({selectedParagraph : data})
    // })

    const selectedParagraphArray = this.state.selectedParagraph.split("")

    const testInfo = selectedParagraphArray.map(selectedLetter => {
        return {
            testLetter: selectedLetter,
            status: "notAttempted"
        }
    })
    this.setState({testInfo})
}



    render() { 
        console.log(selectedParagraph)

        console.log("test infor", this.state.testInfo)
        
        return (  
            // jsx is nothing html inside the JS 
            <div className="App" >
                <Nav/>
                <Landing/>
                <ChallengeSection
                 selectedParagraph={this.state.selectedParagraph}
                 timerStarted ={this.state.timerStarted}
                 words= {this.state.words}
                 characters= {this.state.characters}
                 wpm ={this.state.wpm}
                 timeRemaining={this.state.timeRemaining}
                 testInfo={this.state.testInfo}
                 
                 
                 />
                <Footer/>
            </div>
        );
    }
}
 
export default App;
import React from 'react';
import Nav from './nav/nav';
import './App.css';
import Landing from './landing/landing';
import Footer from './footer/footer';
import ChallengeSection from './challengeSection/challengeSection';


const timerStarted = 30;
class App extends React.Component {
    state = {
        selectedParagraph:"hi boring ",
        timerStarted: false,
        timeRemaining: timerStarted,
        words: 0 ,
        characters:0,
        wpm:0


          
        
    }
     
    render() { 
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
                 
                 
                 />
                <Footer/>
            </div>
        );
    }
}
 
export default App;
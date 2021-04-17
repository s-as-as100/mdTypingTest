import React from 'react';
import Nav from './nav/nav';
import './App.css';
import Landing from './landing/landing';



class App extends React.Component {
     
    render() { 
        return (  
            // jsx is nothing html inside the JS 
            <div className="App" >
                <Nav/>
                <Landing/>
            </div>
        );
    }
}
 
export default App;
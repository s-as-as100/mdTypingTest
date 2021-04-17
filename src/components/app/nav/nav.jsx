import React from 'react'
import './nav.css';
import logo from './../../../assets/logo.png';

const Nav = () => {
    return (
       <div className="nav-container">
           <div className="nav-left" >
            <img className="flash-logo" src={logo} alt="logo"/>
            <p className="flash-text">flashType</p>
           </div>
           <div className="nav-right" >
               <a 
               target="_blank"
               className="nav-github-link"
            //    ref="noreferrer"
               href="https://github.com/s-as-as100">
                   githublink
               </a>

           </div>

       </div>
      );
}
 
export default Nav;
 
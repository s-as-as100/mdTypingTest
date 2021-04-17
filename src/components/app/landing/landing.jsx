import React from "react";
import "./landing.css";
import Typewriter from 'typewriter-effect';
import hero from "./../../../assets/hero.png";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">Can you type....</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }
        
        }
          />
        </div>
      </div>
      <div data-aos="fade-left" className="landing-right">
        <img className="hero-img" src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import BannerImage from "../assets/about2.jpg";
import classimg from "../assets/about.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <div className="content">
        <p>
        V CUBE SOFTWARE SOLUTIONS PVT.LTD, is an institute that caters to the needs of students, businessmen and freelancers wanting to learn, improve, explore and soar in their careers. Our corporate office is located in Kukatpally, Hyderabad, India and our training centres are in Kukatpally and Ameerpet, Hyderabad, India. V CUBE Software Solutions Pvt.Ltd offers online information  technology courses, online computer programming classes, and starting information technology courses. Take advantage of both online and offline resources.
        </p>
        <img id='class-img' src={classimg} alt="image"/>
        </div>
        <div className="special">
          
        <h2>What's special about VCUBE?</h2>
        <h3>LEARN ANYTHING ONLINE, OFFLINE AND CORPORATE TRAININGS</h3>
        <p>Online information technology courses, online computer programming programmes and information
        technology courses for novices are all available online. Take Advantage of both online and offline
        resources. Employee training is both important and cost effective in terms of advancing their careers.</p>
        <h3>EXCEL YOUR SKILLSET</h3>
        <p>Master new online information technology courses or a specific domain with our superb online computer programming lessons that turn novices into specialists.</p>
        <h3>TALK TO OUR EXPERTS</h3>
        <p>We offer 24/7 help to all students so that they may get their questions answered quickly and easily at any time.</p>
        </div>
      </div>
      
    </div>
  );
}

export default About;
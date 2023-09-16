import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>We will make you not just "THE BEST"<br/> but "GREAT PROGRAMMER" </h1>
        <p> Take a first step towards your career from here</p>
        <Link to="/enrol">
          <button> Enrol Here</button>
        </Link>
        <br/>
        <p style={{ fontSize:"26px",fontWeight:"700px" }}>V CUBE SOFTWARE SOLUTIONS PVT.LTD <br/>is one of the  Best software Training institutes,<br/> Can Assist you to Reach Your Goal with IT Courses</p>
        <br/><br/>
        <Link to="/courses">
          <button>See All Courses<ArrowRightAltIcon/></button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Enrol from "./Enrol";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>We will make you not just "THE BEST"<br/> but "GREAT PRGRAMMER" </h1>
        <p> Take a first step towards your career from here</p>
        <Link to="/enrol">
          <button> Enrol Here</button>
        </Link>
        <br/><br/>
        <Link to="/courses">
          <button>See All Courses<ArrowRightAltIcon/></button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
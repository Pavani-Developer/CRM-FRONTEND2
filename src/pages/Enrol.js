import React from 'react'
import axios from 'axios';
import { useState } from "react";
import "../styles/Enrol.css";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BannerImage from "../assets/enrol.jpg";




const Enrol = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [course, setCourse] = useState("");


    function handleSubmit(){
        axios.post("http://localhost:8000/api/post/",
        {
          firstname: firstname,
          lastname:lastname,
          emailid: emailid,
          phoneNumber: phoneNumber,
          course:course,
        }).then((response)=>{
          console.log(response)
        })
          
        };
  return (
    <div className='enrol-page' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='enrol-content'>
            <p> <AutoAwesomeIcon/>  V CUBE SOFTWARE SOLUTIONS PVT.LTD</p><br/>
             <h1>V CUBE SOFTWARE SOLUTIONS PVT.LTD is one of the  Best software Training institutes, Can Assist you to Reach Your Goal with IT Courses</h1>
         </div>
      <div className='box'>
            <h1 style={{textAlign:'center'}}>Enroll Here</h1>
        <form onSubmit={handleSubmit}>
            
        <label for="fname">First Name:</label>
        <input
          type="text"
          value={firstname}
          placeholder="First name"
          id='fname'
          required
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br/>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          value={lastname}
          placeholder="Last Name"
          id='lname'
          required
          onChange={(e) => setLastname(e.target.value)}
          />
          <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={emailid}
          placeholder="Email"
          id='email'
          required
          onChange={(e) => setEmailid(e.target.value)}
        />
        <br />
        <label htmlFor="phn">Mobile Number:</label>
        <input
          type="text"
          value={phoneNumber}
          placeholder="Mobile Number"
          id='phn'
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <label htmlFor="course">Course :</label>
        <input
          type="text"
          value={course}
          placeholder="Course"
          id='course'
          required
          onChange={(e) => setCourse(e.target.value)}
        />
        <br />
        <button type="submit">Enroll</button>

        
      </form>
      </div>
      </div>
    
  )
}

export default Enrol;

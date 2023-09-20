import React from 'react'
import axios from 'axios';
import { useState } from "react";
import "../styles/Enrol.css";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BannerImage from "../assets/enrol.jpg";
import validator from "validator";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Enrol = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [course, setCourse] = useState("");
    const [emailmessage, setEmailmessage] = useState("");
    const [phonemessage, setPhonemessage] = useState("");


    function handleSubmit(){
        axios.post("http://localhost:8000/api/post/",
        {
          firstname: firstname,
          lastname:lastname,
          emailid: emailid,
          phoneNumber: phoneNumber,
          course:course,
        }).then((response)=>{
          console.log(response);
          notify();
        })
        
        };
        function notify() {
          toast("Wow so easy!");
        };
        //Validation for Email
        const validateEmail = (e) => {
          const email = e.target.value;
      
          if (validator.isEmail(email)) {
            setEmailmessage("Thank you");
          } else {
            setEmailmessage("Please, enter valid Email!");
          }
        };
        //Validation for Phone Number
        const validatePhone = (e) => {
          const phone = e.target.value;
      
          if (validator.isMobilePhone(phone)) {
            setPhonemessage("Thank you");
          } else {
            setPhonemessage("Please, enter valid Mobile Number!");
          }
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
            
        <label htmlFor="fname">First Name:</label>
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
          onChange={(e) => setEmailid(e.target.value) || validateEmail(e) }
        />
        <br />
        <span
        style={{fontWeight: "bold",color: "brown"}} >
        {emailmessage}
        </span>
        <label htmlFor="phn">Mobile Number:</label>
        <input
          type="text"
          value={phoneNumber}
          placeholder="Enter your mobile number with your country code"
          id='phn'
          required
          onChange={(e) => setPhoneNumber(e.target.value) ||
          validatePhone(e) }
        />
        <br />
        <span
        style={{fontWeight: "bold",color: "brown"}} >
        {phonemessage}
        </span>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          value={course}
          placeholder="Course"
          id='course'
          required
          onChange={(e) => setCourse(e.target.value)}
        />
        <br />
        <button type="submit" onClick={notify}>Enroll</button>
        <ToastContainer />

        
      </form>
      </div>
      </div>
    
  )
}

export default Enrol;

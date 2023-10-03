import React from 'react'
import axios from 'axios';
import { useState } from "react";
import "../styles/Join.css";
import BannerImage from "../assets/login.jpg";
import validator from "validator";




const Join = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [course, setCourse] = useState("");
    const [emailmessage, setEmailmessage] = useState("");
    const [phonemessage, setPhonemessage] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
        axios.post("http://localhost:8000/api/joinpost/",
        {
          name: name,
          username:username,
          password:password,
          email: emailid,
          mobile_no: phoneNumber,
          course:course,
        }).then((response)=>{
          console.log(response)
          alert("User Successfully created")
        }).catch((error) => {
          console.log('Error', error);
        })
          
        };
        const validateEmail = (e) => {
            const email = e.target.value;
        
            if (validator.isEmail(email)) {
              setEmailmessage("Thank you");
            } else {
              setEmailmessage("Please, enter valid Email!");
            }
          };
          const validatePhone = (e) => {
            const phone = e.target.value;
        
            if (validator.isMobilePhone(phone)) {
              setPhonemessage("Thank you");
            } else {
              setPhonemessage("Please, enter valid Mobile Number!");
            }
        };
  return (
    <div className='join-page' style={{ backgroundImage: `url(${BannerImage})` }}>
        
      <div className='join-box'>
            <h1 style={{textAlign:'center'}}>Join Student</h1>
        <form onSubmit={handleSubmit}>
            
        <label for="name">Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          id='name'
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label htmlFor="uname">User Name:</label>
        <input
          type="text"
          value={username}
          placeholder="User Name"
          id='uname'
          required
          onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <label htmlFor="passw">Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          id='passw'
          required
          onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={emailid}
          placeholder="Email"
          id='email'
          required
          onChange={(e) =>  setEmailid(e.target.value) || validateEmail(e) }
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
          placeholder="Mobile Number"
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
        <br/>
      
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
        
    
        
        <button type="submit">Create</button>

        
      </form>
      </div>
      </div>
    
  )
}

export default Join;



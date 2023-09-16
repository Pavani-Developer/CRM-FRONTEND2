
import React ,{useState}from "react";
import '../styles/Contact.css';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BannerImage from "../assets/contact.jpg";
import validator from "validator";
import axios from 'axios';




function  Contact(){
    const [firstname, setFirstname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [message, setMessage] = useState("");
    const [emailmessage, setEmailmessage] = useState("");
  


    function handleSubmit(){
        axios.post("http://localhost:8000/api/contact/",
        {
          name: firstname,
          email: emailid,
          message:message,
        }).then((response)=>{
          console.log(response)
        })
          
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
  return (
    <div className="contact" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div
        className="leftSide"
      >
        <p id="content">Thank you for taking the time to look at our website! We hope you found our website to be informative and useful. Please contact us using the information below if you have any questions about our services. Here at Vcube software solutions, we look forward to addressing your questions and offering excellent support.</p>
        <h1>Contact Us</h1>
      <p><PlaceIcon/><br/>HIG-211,<br/>Besides Annamayya Hotel,<br/>Dhanalakshmi Center,<br/>KPHB Phase 2,<br/>
				Kukatpally,<br/> Hyderabad - 500087.</p>  <br/>
        <p><PhoneIcon/>+ 91 7675070124 <br/><PhoneIcon/> + 91 9059456742</p>
        <p> <MailOutlineIcon/> hr@vcubesoftwaresolutions.com</p>
      </div>
      <div className="rightSide">
        <h1> Get in touch</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input 
          name="name" 
          placeholder="Enter full name..." 
          type="text" 
          value={firstname}
          id='fname'
          required
          onChange={(e) => setFirstname(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input 
          name="email" 
          placeholder="Enter email.."
          type="email" 
          value={emailid}
          id='email'
          required
          onChange={(e) => setEmailid(e.target.value) || validateEmail(e)}/>
          <span
          style={{fontWeight: "bold",color: "brown"}} >
          {emailmessage}
          </span>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            value={message}
            id='message'
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}> Send Message</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;
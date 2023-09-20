// Import the react JS packages 
import axios from "axios";
import {useState} from "react";
import '../styles/Admin.css';
import BannerImage from "../assets/login.jpeg";
// Define the Login function.
const Super = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     // Create the submit method.
     const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("http://localhost:8000/api/superlogin/",
        {
          
          username: username,
          password:password,
        }).then((response)=>{
          console.log(response)
          if (response['data'] === true){
            window.location.href = '/super'
            console.log(response)

          }else{
            alert('Invalid Username or Password');
          }
          
          
        });
        
     }
    return(
      <div className="body" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Superuser Sign In</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input className="form-control mt-1" 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
            </div>
          </div>
       </form>
     </div>
     </div>
     )
}


export default Super;
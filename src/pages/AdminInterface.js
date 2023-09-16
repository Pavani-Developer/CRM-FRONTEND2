// Import the react JS packages
import { useState} from "react";
import axios from "axios";

import Button from '@mui/material/Button';
import { Link} from "react-router-dom";
import BannerImage from "../assets/admin.jpeg";
import "../styles/Admininterface.css";







const AdminInterface = () => 
{
  
    /*const [message, setMessage] = useState('');
     useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
         (async () => {
           try {
             const {data} = await axios.get(   
                            'http://localhost:8000/auth/home/', {
                             headers: {
                                'Content-Type': 'application/json'
                             }}
                           );
             setMessage(data.message);
          } catch (e) {
            console.log('not auth')
          }
         })()};
     }, []);*/
     //Fetching only python data from backend
     let[data,setData] = useState([])
     function getPythondata(){
      axios.get("http://localhost:8000/api/get/python").then(
        (response)=>{
          setData(response.data)
        }
      )
      }
    //Fetching only Java data from backend
      function getJavadata(){
        axios.get("http://localhost:8000/api/get/java").then(
          (response)=>{
            setData(response.data)
      
        }
      )
      }
    //Fetching only Testing data from backend
      function getTestingdata(){
      axios.get("http://localhost:8000/api/get/testing").then(
        (response)=>{
          setData(response.data)
      
        }
      )
      }
      //Posting Demos data to the backend
      const [course, setCourse] = useState("");
      const [name, setName] = useState("");
      const [date, setDate] = useState("");
      const [time, setTime] = useState("");
      const [type, setType] = useState("");

      function handleSubmit(){
        axios.post("http://localhost:8000/api/demopost/",
        {
          coursename: course,
          trainername:name,
          date: date,
          time: time,
          coursetype:type,
        }).then((response)=>{
          console.log(response)
        })
      };
      
     
     return (
        
        <div className="admin-body" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="admin-nav">
        
          <Button onClick={getPythondata} variant="contained" color="secondary">Python</Button>
          
          <Button onClick={getJavadata} variant="contained" color="secondary">Java</Button>
          
          <Button onClick={getTestingdata} variant="contained" color="secondary">Testing</Button>
          
      </div>
      <div className="innerbody">
        <div className="demo-form">
          <h1 id = 'joinh1'>Add Demo Classes</h1>
          <form className="demo" onSubmit={handleSubmit}>
            
            <label for="crs">Course:</label>
            <input
              type="text"
              value={course}
              placeholder="course"
              id='crs'
              required
              onChange={(e) => setCourse(e.target.value)}
            />
            <br/>
            <label for="faculty">Faculty:</label>
            <input
              type="text"
              value={name}
              placeholder="Trainer Name"
              id='faculty'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label for="date">Date:</label>
            <input
              type="date"
              value={date}
              placeholder="enter date .."
              id='date'
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <br/>
            <label for="time">Timings:</label>
            <input
              type="time"
              value={time}
              placeholder="Time"
              id='time'
              required
              onChange={(e) => setTime(e.target.value)}
            />
            <br/>
            <label for="type">Course Type:</label>
            <input
              type="text"
              value={type}
              placeholder="offline/online"
              id='type'
              required
              onChange={(e) => setType(e.target.value)}
            />
            <br/>
            <button type="submit">Add</button>
            </form>
        </div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Join</th>
            </thead>
            
            <tbody>
            {data.map((val) => {
                    return (
                      <tr>
                      
                            <td>{val.firstname}</td>
                            <td>{val.lastname}</td>
                            <td>{val.emailid}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.course}</td>
                            <td><Link to='/join'>Join</Link></td>
                            
                            </tr>
                    )
          })}
          </tbody>
          </table>
          </div>
            </div>
     );
}

export default AdminInterface;
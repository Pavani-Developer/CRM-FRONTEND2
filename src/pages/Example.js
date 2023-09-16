// Import the react JS packages
import { useState} from "react";
import axios from "axios";

import Button from '@mui/material/Button';
import { Link} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const AdminInterface = () => {
  
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
     let [pythoncount, setPythonount] = useState();
     let[data,setData] = useState([])
     function getPythondata(){
      axios.get("http://localhost:8000/api/get/python").then(
        (response)=>{
          setData(response.data)
          setPythonount((response.data).length)
          console.log(pythoncount)
        }
      )
      }
      let [javacount, setJavacount] = useState();
      function getJavadata(){
        axios.get("http://localhost:8000/api/get/java").then(
          (response)=>{
            setData(response.data)
            setJavacount((response.data).length)
            console.log(javacount)
        }
      )
      }
      let [testingcount, setTestingcount] = useState();
      function getTestingdata(){
      axios.get("http://localhost:8000/api/get/testing").then(
        (response)=>{
          setData(response.data)
          setTestingcount((response.data).length)
          console.log(testingcount)
        }
      )
      }
      
     
     return (
        
        <div className="admin-body">
        <div className="admin-nav">
        <ul>
        <li>
          <Button onClick={getPythondata} variant="contained" color="secondary">Python</Button>
          </li>
          <li>
          <Button onClick={getJavadata} variant="contained" color="secondary">Java</Button>
          </li>
          <li>
          <Button onClick={getTestingdata} variant="contained" color="secondary">Testing</Button>
          </li>
      </ul>
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
            {data.map((val, key) => {
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
     );
}

export default AdminInterface;
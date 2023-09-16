import React from "react";
import BannerImage from "../assets/demo.jpg";
import "../styles/Demo.css";
import { useState} from "react";
import axios from "axios";


function Home() {
    let [data,setData] = useState([])
    function getdemodata(){
        axios.get("http://localhost:8000/api/getdemo").then(
          (response)=>{
            setData(response.data)
        
          }
        )
        }
  return (
    <div className="demo" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="heading">
            <h1>Demos</h1>
            <p>V CUBE Software Solutions Pvt Ltd</p>
        </div>
        <button className = "demo-btn" onClick={getdemodata}>See Demos</button>
        <table>
          <thead>
            <th>S.No</th>
            <th>Course Nmae</th>
            <th>Faculty Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Course Type</th>
            </thead>
            
            <tbody>
            {data.map((val) => {
                    return (
                      <tr>
                      
                            <td>{val.id}</td>
                            <td>{val.coursename}</td>
                            <td>{val.trainername}</td>
                            <td>{val.date}</td>
                            <td>{val.time}</td>
                            <td>{val.coursetype}</td>
                            
                            
                            </tr>
                    )
          })}
          </tbody>
          </table>
      
      
    </div>
  );
}

export default Home;
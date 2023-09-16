import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { LineChart, Line,ResponsiveContainer } from 'recharts';

import { useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import "../styles/Superinterface.css";



const Superinterface = () => {
  let [pythoncount, setPythonount] = useState([]);
  let [javacount, setJavacount] = useState([]);
  let [testingcount, setTestingcount] = useState([]);
  let [java, setJava] = useState([]);
  let [python, setPython] = useState([]);
  let [testing, setTesting] = useState([]);
  let[bdata,setBdata] = useState([])
  
  function getDataChart(){
   axios.get("http://localhost:8000/api/join").then(
     (response)=>{
       setBdata(response.data)
       
       {bdata.map((val) => {
          if (val.course === 'Python'){
            setPythonount(pythoncount.push(val))
            
          }
          else if (val.course === 'Java'){
            setJavacount(javacount.push(val))
          }
          else  if (val.course === 'Testing'){
            setTestingcount(testingcount.push(val))
          }
        
       
     })
    }
    setPython(pythoncount.length)
    setJava(javacount.length)
    setTesting(testingcount.length)
    
  })
   }
   
    const data = [
      { name: "Python", users: python },
      { name: "Java", users: java },
      { name: "Testing", users:testing },
      
    ];
   
    return (
      <div  style={{ textAlign: "center",backgroundColor:'#E2FAF6'}}>
        
        <h1>Students Data</h1>
        <h4>Total Students :{bdata.length} </h4>
        <Button variant="contained" color="success" onClick={getDataChart}>Click</Button>
        <div className="main">
        <div className="piechart">
          <h3>Data Representation <br/> in Pie chart</h3>
          <PieChart width={400} height={500} >
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#147B6A"
              label
            />
            <Tooltip />
          </PieChart>
          </div>
          <div className="barchart">
          <h3>Data Representation <br/> in Bar chart</h3>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#267B14" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
        <div className="linechart">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
      </div>
      </div>
    );
  };
  
  export default Superinterface;
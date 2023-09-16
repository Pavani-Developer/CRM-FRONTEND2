import Python from "../assets/python.jpg";
import Java from "../assets/java.jpg";
import Devops from "../assets/DevOps.jpeg";
import Power from "../assets/power-bi.jpg";
import { Link } from "react-router-dom";


export const CoursesList = [
  {
    name: 'Python',
    image: Python,
    add:<Link to ='pythondetails'>See More</Link>

  },
  {
    name: "Java",
    image: Java,
    add: <Link to ='javadetails'>See More</Link>
    
  },
  {
    name: "DevOps",
    image: Devops,
    add: <Link to ='devdetails'>See More</Link>
    
  },
  {
    name: "Power BI",
    image: Power,
    add: <Link to ='powerdetails'>See More</Link>

  },
  
];
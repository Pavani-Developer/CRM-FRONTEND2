import React from "react";
import "../styles/Courses.css";

function CourseItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      
    </div>
  );
}

export default CourseItem;
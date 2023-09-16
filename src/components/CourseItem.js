import React from "react";
import "../styles/Courses.css";

function CourseItem({ image, name, add }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <button class="btn btn-warning btn-rounded">{add}</button>
      
    </div>
  );
}

export default CourseItem;
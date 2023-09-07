import React from "react";
import { CoursesList } from "../helpers/CoursesList";
import CourseItem from "../components/CourseItem";
import "../styles/Courses.css";
import BannerImage from "../assets/enrol.jpg";



function Courses() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Our Courses</h1>
      <div className="menuList">
        {CoursesList.map((menuItem, key) => {
          return (
            <CourseItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
        
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
import React from "react";
import Carousel from "../../Exams/Carousel/Carousel";
import Course from "../Course/Course";


export default function Courses(props) {

  const courses = [
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 1",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 2",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 3",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 4",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 5",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 6",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 7",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 8",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 9",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    },
    {
      logo: "../../../assets/Logo2.png",
      courseName: "course 10",
      schoolType: "International",
      coursePriceType: "Free",
      courseProvider: "Udemy",
      courseLocation: "Online"
    }
    // Add more course objects as needed
  ];

  return (
    <div style={{ maxWidth: 1360, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
      <Carousel show={5}>
        {courses.map((course, index) => (
          <Course
            key={index}
            logo={course.logo}
            courseName={course.courseName}
            schoolType={course.schoolType}
            coursePriceType={course.coursePriceType}
            courseProvider={course.courseProvider}
            courseLocation={course.courseLocation}

          />
        ))}
      </Carousel>
    </div>
  );
}
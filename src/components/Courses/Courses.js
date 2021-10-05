import React, { useEffect, useState } from 'react';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Courses.css'
const Courses = () => {
    const url = './edusite-data-full.json';
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div>
            <Header></Header>
           <h2 className="pt-4">Our Courses</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 course-container pb-3">
        {
            courses.map(course => <CourseList
             key={course.id}
             course={course}
            ></CourseList>)
        }
        </div>
        <Footer></Footer> 
        </div>
    );
};

export default Courses;
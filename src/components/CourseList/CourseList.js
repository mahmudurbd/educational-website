import React from 'react';

const CourseList = (props) => {
    const {course_title,course_thumbs,catergory,ratings} = props.course;
    return (
        <div className="col">
                <div className="card h-100">
                <img src={course_thumbs} className="card-img-top img-fluid" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{course_title}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h6>Category: {catergory}</h6>
                    <h6>Course Ratings: {ratings}</h6>
                </div>
                </div>
        </div>
    );
};

export default CourseList;
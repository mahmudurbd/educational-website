import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';

const Home = () => {
    const url = './edusite-data.json';
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div>
         <Header></Header>   
        <section className="fdb-block p-5">
            <div className="container align-items-center justify-content-center d-flex">
                <div className="row align-items-center text-left">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./hero.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
                    <h1>Explore Your Knowledge</h1>
                    <p className="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p className="mt-4"><a href="https://www.froala.com" className="btn btn-secondary">Get Started</a></p>
                </div>
                </div>
            </div>
        </section>
        <h2>Our Courses</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 course-container">
        {
            courses.map(course=><Course key={course.id} course={course}>

            </Course>)
        }
        </div>
        
        <section className="fdb-block p-5 bg-dark text-white">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-auto text-center">
                    <a className="btn btn-outline-light" href="/">Subscribe Us</a>
                </div>

                <div className="col-auto mt-4 mt-sm-0">
                    <h2>Getting updated course news subcribe us</h2>
                </div>
                </div>
            </div>
    </section>

        <Footer></Footer>
        </div>
    );
};

export default Home;
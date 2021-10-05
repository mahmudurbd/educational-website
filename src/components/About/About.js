import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';
const About = () => {
    return (
        <div>
            <Header></Header>
            <section className="fdb-block py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        <h1>About Us</h1>
                    </div>
                    </div>

                    <div className="row text-left justify-content-center pt-5">
                    <div className="col-12 col-md-6 col-lg-5 m-auto">
                        <h3><strong>Skilled Trainers</strong></h3>

                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">
                        <h3><strong>Dedicated Supports</strong></h3>

                        <p className="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>
                    </div>
                    </div>

                    <div className="row text-left justify-content-center pt-lg-4">
                    <div className="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                        <h3><strong>Well Planned Curiculam</strong></h3>

                        <p className="lead">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                        <h3><strong>Top Rated Services</strong></h3>

                        <p className="lead">A small river named Duden flows by their place far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    </div>
                </div>
                </section>
                <Footer></Footer>
        </div>
    );
};

export default About;
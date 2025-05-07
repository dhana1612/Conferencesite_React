import React from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../../Core/Metatags'
import { Venue } from '../Home/Venue'

export default function About_the_Conference() {
  return (
    <>
    <MetaTags/>
      <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('./images/photo18.jpeg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">About Conference</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-us-countdown-area section-padding-100-0 pt-4 pb-2" id="about">
        <div className="container pt-5 pb-2">
          <h5 className="text-uppercase text-primary fs-3 fw-bold">About Conference</h5>
          <div className="row mb-3">
            {/* About Content */}
            <div className="col-lg-7 col-md-12">
              <div className="about-content-text mb-4 mt-4 about_us">
                <p className="fs-4" style={{ textIndent: "55px", textAlign: "justify" }}>
                 The International Conference on Next-Gen Computing and Intelligent Systems, a premier platform for researchers, academicians, industry professionals, and students to come together and explore the latest innovations and emerging trends in the field of advanced computing and intelligent technologies.
                </p>
                <p className="fs-4" style={{ textIndent: "55px", textAlign: "justify" }}>
                 This conference aims to foster collaboration and knowledge exchange in areas such as Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Internet of Things (IoT), Cybersecurity, Quantum Computing, and other next-generation computing paradigms. It will serve as a forum to present cutting-edge research, share insights, and discuss the practical challenges and solutions shaping the future of intelligent systems.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-5 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
              <img src="../images/photo1.png" alt="AI Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <Venue/>
    </>
  )
}

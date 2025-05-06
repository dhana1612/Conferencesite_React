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
                  The International Conference on Next-Gen Computing and Intelligent Systems is a prominent event that brings together researchers, industry professionals, and academicians to discuss and explore advancements in computing and intelligent systems. The conference focuses on themes such as artificial intelligence, machine learning, IoT, cybersecurity, edge and cloud computing, and sustainable development.
                </p>
                <p className="fs-4" style={{ textIndent: "55px", textAlign: "justify" }}>
                  In 2025, the conference is scheduled to take place on August 23rd and 24th at the Institute of Technology and Applied Research in Chennai. ICNXCIS iTech, established in 2025, is renowned for its commitment to academic excellence and industry engagement, making it a fitting venue for this international gathering.
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

import React from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../../Core/Metatags'

export default function About() {
  return (
    <>
      <MetaTags />
   
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
            <div className="text-start mt-4">
              <Link className="btn btn-primary px-4 py-2 fs-5 fw-bold" to="/about">
                About Conference
              </Link>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="col-lg-5 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
          <img src="images\photo1.png" alt="AI Image" className="img-fluid" />
        </div>
      </div>
    </div>
    </section>

    </>
  )
}

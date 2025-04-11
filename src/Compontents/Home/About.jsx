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
              The International Conference on Next-Gen Computing and Intelligent Systems (ICNXCIS) is a prominent event that brings together researchers, industry professionals, and academicians to discuss and explore advancements in computing and intelligent systems. The conference focuses on themes such as artificial intelligence, machine learning, IoT, cybersecurity, edge and cloud computing, and sustainable development.
            </p>
            <p className="fs-4" style={{ textIndent: "55px", textAlign: "justify" }}>
              In 2025, the conference is scheduled to take place on July 21st and 22nd at the PSG Institute of Technology and Applied Research (PSG iTech) in Coimbatore, Tamil Nadu, India. PSG iTech, established in 2014, is renowned for its commitment to academic excellence and industry engagement, making it a fitting venue for this international gathering.
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
          <img src="../Images/Photo1.png" alt="AI Image" className="img-fluid" />
        </div>
      </div>
    </div>
    </section>

    </>
  )
}

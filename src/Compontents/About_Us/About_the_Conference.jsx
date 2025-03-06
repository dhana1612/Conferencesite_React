import React from 'react'

export default function About_the_Conference() {
  return (
    <>
      <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('public/Images/Photo18.jpeg')", backgroundSize: "cover", backgroundPosition: "center",}}>
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
                  The International Conference on Next-Gen Computing and Intelligent Systems (ICNXCIS) is a prominent event that brings together researchers, industry professionals, and academicians to discuss and explore advancements in computing and intelligent systems. The conference focuses on themes such as artificial intelligence, machine learning, IoT, cybersecurity, edge and cloud computing, and sustainable development.
                </p>
                <p className="fs-4" style={{ textIndent: "55px", textAlign: "justify" }}>
                  In 2025, the conference is scheduled to take place on July 21st and 22nd at the PSG Institute of Technology and Applied Research (PSG iTech) in Coimbatore, Tamil Nadu, India. PSG iTech, established in 2014, is renowned for its commitment to academic excellence and industry engagement, making it a fitting venue for this international gathering.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-5 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
              <img src="../Images/Photo1.png" alt="AI Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section
        className="container-fluid text-dark p-5"
        style={{
          backgroundImage: "url('../Images/Photo23.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container p-5 rounded-3 box-shadow">
          <div className="row">
            {/* Where Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center align-items-start">
                <i className="fa-solid fa-map-marker-alt text-success fs-1 mb-3"></i>
                <p className="display-5 fw-bold">Where</p>
                <div className="border-bottom border-success border-3 w-25 mb-3"></div>
                <p className="mt-2 fs-4 text-center">
                  PSG Institute of Technology and Applied Research
                  <br />
                  Avinashi Road, Neelambur, Coimbatore,
                  <br />
                  Tamilnadu
                </p>
              </div>
            </div>
            {/* When Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center align-items-start">
                <i className="fa-solid fa-calendar-alt text-success fs-1 mb-3"></i>
                <p className="display-5 fw-bold">When</p>
                <div className="border-bottom border-success border-3 w-25 mb-3"></div>
                <p className="mt-2 fs-4 text-center">23<sup>rd</sup> - 24<sup>th</sup> August, 2024</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/Author_s_Desk/Registration_Details" className="btn bg-success text-light fs-4 btn-lg">
              Register Here
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

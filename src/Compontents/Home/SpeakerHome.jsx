import React from 'react'
import { Link } from 'react-router-dom'

export default function SpeakerHome() {
  return (
    <>
        <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('./Images/Photo18.jpeg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Speaker</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
        </div>


        <section className="p-5" id="speaker">
      <div className="container p-2">
        <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">Speakers</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s6.png" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Jessy</h4>
                <p className="card-text fs-5">A speaker should have deep knowledge and experience in their field</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s2.png" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Dr. Michael Carter</h4>
                <p className="card-text fs-5">A great speaker captivates the audience with their energy and storytelling</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s4.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Lisa </h4>
                <p className="card-text fs-5">A speaker should exude confidence and authority on their topic.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s5.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Kevin Brooks</h4>
                <p className="card-text fs-5">Good speakers interact with and relate to their audience.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s7.png" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Prof. Sophia Patel</h4>
                <p className="card-text fs-5">A speaker should have deep knowledge and experience in their field</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s1.png" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Dr. Fidel castro</h4>
                <p className="card-text fs-5">A great speaker captivates the audience with their energy and storytelling</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s8.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">John lother</h4>
                <p className="card-text fs-5">A speaker should exude confidence and authority on their topic.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-100">
              <img src="/Images/s3.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold">Jenny</h4>
                <p className="card-text fs-5">Good speakers interact with and relate to their audience.</p>
              </div>
            </div>
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
                          DDD Institute of Technology and Applied Research
                          <br />
                          Street Road, Place, City,
                          <br />
                          Country
                        </p>
                      </div>
                    </div>
                    {/* When Section */}
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="d-flex flex-column align-items-center align-items-start">
                        <i className="fa-solid fa-calendar-alt text-success fs-1 mb-3"></i>
                        <p className="display-5 fw-bold">When</p>
                        <div className="border-bottom border-success border-3 w-25 mb-3"></div>
                        <p className="mt-2 fs-4 text-center">23<sup>rd</sup> - 24<sup>th</sup> August, 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/authors/registration-details" className="btn bg-success text-light fs-4 btn-lg">
                      Register Here
                    </Link>
                  </div>
                </div>
              </section>
    
    </>
  )
}

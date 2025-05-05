import React from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../../Core/Metatags'

export default function Scope_of_Conference() {
  return (
    <>
    <MetaTags/>
       <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('https://wallpapers.com/images/hd/pile-of-books-on-blue-background-3gp0wweu63urx8eg.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Scope of Conference</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>

      <div className="container hero-section my-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="p-4">
                        <p className="text-primary fw-bold fs-2">Computing, Networking & Data Science</p>
                        <p className="mt-3 fs-4 scope">
                            The International Conference on Next-Gen Computing and Intelligent Systems (ICNXCIS) focuses on cutting-edge advancements and research in computing technologies and intelligent systems. It serves as a platform for researchers, academicians, and industry experts to discuss emerging trends, challenges, and applications in next-generation computing.
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-4 fs-4 my-4">
                                <div className="bg-white bg-opacity-50 backdrop-blur p-3 rounded-3 shadow text-center transition-transform">
                                    <div className="fs-2 text-primary mb-2">🤖</div>
                                    <h5 className="fs-4 text-primary fw-bold">AI & ML</h5>
                                    <ul className="list-unstyled text-start d-inline-block">
                                        <li><span className="text-primary fw-bold">&bull;</span> Deep Learning & Neural Networks</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> Natural Language Processing</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> Reinforcement Learning & Robotics</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 fs-4 my-4">
                                <div className="bg-white bg-opacity-50 backdrop-blur p-3 rounded-3 shadow text-center transition-transform">
                                    <div className="fs-2 text-primary mb-2">🌐</div>
                                    <h5 className="fs-4 text-primary fw-bold">IOT</h5>
                                    <ul className="list-unstyled text-start d-inline-block">
                                        <li><span className="text-primary fw-bold">&bull;</span> Smart Cities & Smart Homes</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> Edge & Fog Computing for IoT</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> IoT Security & Privacy Challenges</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 fs-4 my-4">
                                <div className="bg-white bg-opacity-50 backdrop-blur p-3 rounded-3 shadow text-center transition-transform">
                                    <div className="fs-2 text-primary mb-2">📊</div>
                                    <h5 className="fs-4 text-primary fw-bold">BDA</h5>
                                    <ul className="list-unstyled text-start d-inline-block">
                                        <li><span className="text-primary fw-bold">&bull;</span> Data Mining & Predictive Analytics</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> AI-Driven Big Data Solutions</li>
                                        <li><span className="text-primary fw-bold">&bull;</span> Privacy & Security in Big Data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

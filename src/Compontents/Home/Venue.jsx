import React from 'react'
import { Link } from 'react-router-dom'

export const Venue = () => {
  return (
    <div>
       <section
        className="container-fluid text-dark p-5"
        style={{
          backgroundImage: "url('../images/photo23.jpg')",
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
                <p className="display-5 fw-bold">Where?</p>
                <div className="border-bottom border-success border-3 w-25 mb-3"></div>
                <p className="mt-2 fs-4 text-center">
                International Conference on Next-Gen Computing
                and Intelligent Systems
                  <br />
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
            {/* When Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center align-items-start">
                <i className="fa-solid fa-calendar-alt text-success fs-1 mb-3"></i>
                <p className="display-5 fw-bold">When?</p>
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
    </div>
  )
}

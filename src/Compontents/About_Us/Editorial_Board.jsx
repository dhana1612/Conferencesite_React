import React from 'react'
import { Link, Meta } from 'react-router-dom'
import MetaTags from '../../Core/Metatags'

export default function Editorial_Board() {
  return (
    <>
    <MetaTags/>
        <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('https://wallpapers.com/images/hd/pile-of-books-on-blue-background-3gp0wweu63urx8eg.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Editorial Board</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
        </div>


         {/* Main Section for Editorial Board */}
      <div className="container my-5 px-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h5 className="text-uppercase text-primary fs-3 fw-bold">Committee Members</h5>
        </div>

        {/* First Row with Two Members */}
        <div className="row justify-content-center mb-4 fs-5">
          {[
            {
              name: "Dr. B. Mona lisa",
              designation: "ASP / Mechanical Engg.",
              institute: "AAA University,",
              location: "Al, Arabia."
            },
            {
              name: "Dr. D. Kevin",
              designation: "ASP / Production Engg.",
              institute: "Institute of Technology,",
              location: "City."
            }
          ].map((member, index) => (
            <div
              key={index}
              className="col-md-5 bg-white text-center border border-primary rounded p-4 mx-2 shadow-lg"
            >
              <strong className="text-dark fs-4">{member.name}</strong>
              <br />
              <span className="text-muted">{member.designation}</span>
              <br />
              {member.institute}
              <br />
              <em>{member.location}</em>
            </div>
          ))}
        </div>

        {/* Second Row with Two Members */}
        <div className="row justify-content-center mb-4 fs-5">
          {[
            {
              name: "Dr. B. Lisa",
              designation: "ASP / Mechanical Engg.",
              institute: "AAA University,",
              location: "Al, Arabia."
            },
            {
              name: "Dr. D. karl marx",
              designation: "ASP / Production Engg.",
              institute: "Institute of Technology,",
              location: "City."
            }
          ].map((member, index) => (
            <div
              key={index}
              className="col-md-5 bg-white text-center border border-primary rounded p-4 mx-2 shadow-lg"
            >
              <strong className="text-dark fs-4">{member.name}</strong>
              <br />
              <span className="text-muted">{member.designation}</span>
              <br />
              {member.institute}
              <br />
              <em>{member.location}</em>
            </div>
          ))}
        </div>

        {/* Single Member at the Center */}
        <div className="row justify-content-center fs-5">
          <div className="col-md-8 bg-white text-center border border-primary rounded p-4 shadow-lg">
            <strong className="text-dark fs-4">Dr. lenin</strong>
            <br />
            <span className="text-muted">Professor</span>
            <br />
            Dept. of Environmental Science & Engg.,
            <br />
            <em> University, Country.</em>
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

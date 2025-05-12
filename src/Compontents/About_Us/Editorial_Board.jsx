import React from 'react'
import { Link, Meta } from 'react-router-dom'
import MetaTags from '../../Core/Metatags'
import { Venue } from '../Home/Venue'

export default function Editorial_Board() {
  return (
    <>
    <MetaTags/>
 <div id="intro-example" className="img-fluid animated fadeIn position-relative overflow-hidden" style={{ height: "30vh", marginTop: "80px", width: "100%" }}>
  {/* Blurred Background Image */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
    backgroundImage: "url('https://wallpapers.com/images/hd/pile-of-books-on-blue-background-3gp0wweu63urx8eg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: 1
  }}></div>

  {/* Foreground Content with Dark Overlay */}
  <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.4)" // Optional overlay for readability
  }}>
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
              name: "Person",
              designation: "Position",
              location: "Chennai, India."
            },
            {
              name: "Person 2",
              designation: "Position",
             location: "Chennai, India."
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
              <em>{member.location}</em>
            </div>
          ))}
        </div>

        {/* Second Row with Two Members */}
        <div className="row justify-content-center mb-4 fs-5">
          {[
            {
              name: "Person 1",
              designation: "Position",
              location: "Chennai, India."
            },
            {
              name: "Person 2",
              designation: "Position",
             location: "Chennai, India."
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
              <em>{member.location}</em>
            </div>
          ))}
        </div>

        {/* Single Member at the Center */}
        <div className="row justify-content-center fs-5">
          <div className="col-md-8 bg-white text-center border border-primary rounded p-4 shadow-lg">
            <strong className="text-dark fs-4">Person 3</strong>
            <br />
            <span className="text-muted">Position</span>
            <br />
            <em> Chennai, India.</em>
          </div>
        </div>
      </div>

     {/* Venue Section */}
      <Venue/>
    </>
  )
}

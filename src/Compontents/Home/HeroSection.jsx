import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section id="home">
    <div
      id="intro-example"
      className="img-fluid animated fadeIn"
      style={{
        backgroundImage: "url('images/photo2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="mask w-100 h-100 bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
        <div className="text-start px-3 animated slideInUp" style={{ color: "#FFFFFF", animationDelay: "0.5s" }}>
          <h1 className="mb-3 text-center title">
           International Conference on Next-Gen Computing <br />and Intelligent Systems
          </h1>
          <h5 className="mb-3 display-6 text-center text-warning">23rd - 24th August, 2025</h5>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-lg m-2 startbutton text-dark fs-4 fw-bold animated pulse infinite"
              style={{ backgroundColor: "white", animationDuration: "1.5s" }}
              to="/authors/registration-details"
              role="button"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

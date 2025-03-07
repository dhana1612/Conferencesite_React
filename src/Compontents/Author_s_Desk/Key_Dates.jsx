import React from 'react'
import { Link } from 'react-router-dom'

export default function Key_Dates() {
  return (
    <>
       <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/712/130/non_2x/stack-of-books-on-wooden-table-against-blue-background-free-photo.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Key Dates</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>


        <div className="container my-5 px-4 fs-4">
            {/* Heading */}
            <h5 className="text-uppercase text-primary fs-3 pb-5 fw-bold">Important Dates</h5>

            {/* Row 1 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-warning shadow-sm fw-semibold">
                <div className="col-6 border-end border-white">Abstract Submission Deadline</div>
                <div className="col-6">February 3, 2025</div>
            </div>

            {/* Row 2 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-info shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Full Paper Submission Deadline</div>
                <div className="col-6">April 30, 2025</div>
            </div>

            {/* Row 3 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-warning shadow-sm fw-semibold">
                <div className="col-6 border-end border-white">Notification of Acceptance</div>
                <div className="col-6">June 16, 2025</div>
            </div>

            {/* Row 4 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-info shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Final Paper Submission Deadline</div>
                <div className="col-6">June 30, 2025</div>
            </div>

            {/* Row 5 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-warning shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Conference Dates</div>
                <div className="col-6">July 21-22, 2025</div>
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
            <Link to="/authors/registration-details" className="btn bg-success text-light fs-4 btn-lg">
              Register Here
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Organizing_Committee() {
  return (
    <>
       <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('https://wallpapers.com/images/hd/pile-of-books-on-blue-background-3gp0wweu63urx8eg.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Organizing Committee</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
        </div>

        <div className="container my-5" style={{ maxWidth: "800px" }}>
            {/* Chairman */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-sm sm:max-w-sm fs-2">Chairman</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        Dr. N. Anbazhaghan, M.E., Ph.D., Principal
                    </div>
                </div>
            </div>

            {/* Convenors */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Convenors</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Dr. J. Joseph Ignatious, M.E., Ph.D., Professor / ECE</li>
                            <li className="list-group-item">Dr. G. Perumal, M.E., Ph.D., Professor & Head / MECH</li>
                            <li className="list-group-item">Dr. J.K. Jothi Kalpana, M.Tech., Ph.D., Professor / CSE</li>
                            <li className="list-group-item">Dr. S. Shanmuga Sundaram, M.E., Ph.D., Coordinator / S&H</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Advisory Committee */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Advisory Committee</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Mr. G. Sadiq Basha, HOD / ECE</li>
                            <li className="list-group-item">Mr. K. Ramesh, HOD / CSE</li>
                            <li className="list-group-item">Mr. S. Manimaran, HOD / EEE</li>
                            <li className="list-group-item">Mr. A. Kumar, HOD / CIVIL</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Coordinators */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Coordinators</h4>
                <div className="card mt-3 shadow-sm mx-5 fs-5">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Mr. N. Gobinathan, Assistant Professor / CSE</li>
                            <li className="list-group-item">Mr. P. Paruthillam Vazhuthi, Assistant Professor / ECE</li>
                            <li className="list-group-item">Mr. N. Ejoumalae, Assistant Professor / MEC</li>
                            <li className="list-group-item">Mr. R. Vimalprakash, Assistant Professor / EEE</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Members */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Members</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Mr. C. Subramaniyan, Associate Professor / MECH</li>
                            <li className="list-group-item">Mr. B. Annadurai, Assistant Professor / EEE</li>
                            <li className="list-group-item">Mrs. T. Priyadarshini, Assistant Professor / ECE</li>
                            <li className="list-group-item">Mr. P. Dinesh Babu, Assistant Professor / CSE</li>
                            <li className="list-group-item">Mrs. S. Sivapriya, Assistant Professor / CIVIL</li>
                        </ul>
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

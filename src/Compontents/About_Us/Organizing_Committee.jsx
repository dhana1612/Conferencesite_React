import React from 'react'
import { Venue } from '../Home/Venue'
import MetaTags from '../../Core/Metatags'

export default function Organizing_Committee() {
  return (
    <>
    <MetaTags/>
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
                        Dr. S. Elumalai, M.E., Ph.D., Principal
                    </div>
                </div>
            </div>

            {/* Convenors */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Convenors</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Dr. J. Peter, M.E., Ph.D., Professor / ECE</li>
                            <li className="list-group-item">Dr. G. Lisa, M.E., Ph.D., Professor & Head / MECH</li>
                            <li className="list-group-item">Dr. J.K. Diayana, M.Tech., Ph.D., Professor / CSE</li>
                            <li className="list-group-item">Dr. S. John, M.E., Ph.D., Coordinator / S&H</li>
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
                            <li className="list-group-item">Mr. G. Jack, HOD / ECE</li>
                            <li className="list-group-item">Mr. K. Vasanth, HOD / CSE</li>
                            <li className="list-group-item">Mr. S. Johnarthan, HOD / EEE</li>
                            <li className="list-group-item">Mr. A. Harish, HOD / CIVIL</li>
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
                            <li className="list-group-item">Mr. N. Peter, Assistant Professor / CSE</li>
                            <li className="list-group-item">Mr. P. John, Assistant Professor / ECE</li>
                            <li className="list-group-item">Mr. N. Varun, Assistant Professor / MEC</li>
                            <li className="list-group-item">Mr. R. Jack, Assistant Professor / EEE</li>
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
                            <li className="list-group-item">Mr. C. Prasath, Associate Professor / MECH</li>
                            <li className="list-group-item">Mr. B. Dhana, Assistant Professor / EEE</li>
                            <li className="list-group-item">Mrs. T. Chandra, Assistant Professor / ECE</li>
                            <li className="list-group-item">Mr. S. Malai, Assistant Professor / CSE</li>
                            <li className="list-group-item">Mrs. S Sahana , Assistant Professor / CIVIL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Venue Section */}
        <Venue/>
    </>
  )
}

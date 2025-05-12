import React from 'react'
import { Venue } from '../Home/Venue'
import MetaTags from '../../Core/Metatags'

export default function Organizing_Committee() {
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
      <h2 className="fw-bold display-5 text-uppercase text-light">Technical Committee</h2>
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
                       Name, Position, Department
                    </div>
                </div>
            </div>

            {/* Convenors */}
            <div className="my-5">
                <h4 className="bg-primary text-white py-2 rounded-full px-4 mx-auto text-center max-w-xs sm:max-w-sm fs-2">Convenors</h4>
                <div className="card mt-3 shadow-sm mx-5">
                    <div className="card-body fs-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
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
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
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
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
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
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
                            <li className="list-group-item">Name, Position, Department</li>
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

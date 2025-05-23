import React from 'react'
import { Venue } from '../Home/Venue'

export default function Key_Dates() {
  return (
    <>
<div id="intro-example" className="img-fluid animated fadeIn position-relative overflow-hidden" style={{ height: "30vh", marginTop: "80px", width: "100%" }}>
  {/* Blurred Background Layer */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/712/130/non_2x/stack-of-books-on-wooden-table-against-blue-background-free-photo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: 1
  }}></div>

  {/* Content Layer with Dark Overlay */}
  <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }}>
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
                <div className="col-6">July 3, 2025</div>
            </div>

            {/* Row 2 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-info shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Full Paper Submission Deadline</div>
                <div className="col-6">July 7, 2025</div>
            </div>

            {/* Row 3 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-warning shadow-sm fw-semibold">
                <div className="col-6 border-end border-white">Notification of Acceptance</div>
                <div className="col-6">July 16, 2025</div>
            </div>

            {/* Row 4 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-info shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Final Paper Submission Deadline</div>
                <div className="col-6">July 30, 2025</div>
            </div>

            {/* Row 5 */}
            <div className="row text-center fw-bold align-items-center py-4 rounded shadow-lg mb-3 alert alert-warning shadow-sm fw-semibold">
                <div className="col-6 border-end border-dark">Conference Dates</div>
                <div className="col-6">August 23-24, 2025</div>
            </div>
        </div>

             {/* Venue Section */}
             <Venue/>
            
    </>
  )
}

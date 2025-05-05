import React from 'react'
import { Link } from 'react-router-dom'

export default function Journal_Publication() {
  return (
    <>
       <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/712/130/non_2x/stack-of-books-on-wooden-table-against-blue-background-free-photo.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Journal Publication</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>


      <div className="container-fluid d-flex vh-50 justify-content-center align-items-center my-5">
            <div className="text-center border rounded p-5 shadow">
                <h1 className="fw-bold text-dark">Coming Soon</h1>
                <p className="text-secondary">We're working on something exciting!</p>
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
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

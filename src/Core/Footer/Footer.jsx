import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
   <>
    {/* <!--Footer Section--> */}
    <footer className="text-center text-lg-start text-white fs-5 pt-4" style={{ backgroundColor: "#929fba",  backgroundRepeat: "no-repeat" }} id="Footerbg">
      <div className="container p-4 ps-3 py-0">
        <section>
          <div className="row">

            {/*Conference*/}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-dark text-uppercase mb-4 fw-bold fs-4">
                Conference
              </h6>
              <p id="FooterConference">
                The International Conference on Next-Gen Computing and Intelligent
                Systems focuses on cutting-edge advancements and research in
                computing technologies and intelligent systems.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />


             {/* Quick Links */}
             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 text-dark fw-bold fs-4">General</h6>
              <p><Link  to="https://icngcis.org/" className="text-white text-decoration-none">Home</Link></p>
              <p><Link  to="/about" className="text-white text-decoration-none"> About the Conference</Link></p>
              <p><Link  to="/about/Scope" className="text-white text-decoration-none">Scope of Conference</Link></p>
              <p><Link  to="/Speaker" className="text-white text-decoration-none"> Key Invites</Link></p>
            </div>

            {/* Topic */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 text-dark fw-bold fs-4">
              ConfInfo
              </h6>
              <p><Link  to="/authors/registration-details" className="text-white text-decoration-none">Registration Details</Link></p>
              <p><Link  to="/authors/new-paper-submissions" className="text-white text-decoration-none"> Paper Submission</Link></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />

            {/* Contact Us */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-justify">
              <h6 className="text-uppercase mb-4 text-dark fw-bold fs-4">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Chennai, India.
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@icngcs.org
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> 123456789
              </p>
            </div>

            {/* Follow Us */}
            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto my-3">

              <h6 className="text-uppercase mb-4 text-dark fw-bold fs-4">Follow us</h6> */}

              {/* facebook */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#" role="button">
                <i className="fab fa-facebook-f"></i>
              </a> */}

              {/* twitter */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "black" }} href="#" role="button">
                <i className="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i>
              </a> */}

              {/* google */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#"role="button">
                <i className="fab fa-google"></i>
              </a> */}

              {/* linkedin */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#" role="button">
                <i className="fab fa-linkedin-in"></i>
              </a> */}

              {/* github */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#" role="button">
                <i className="fab fa-github"></i>
              </a> */}

              {/* instagram */}
              {/* <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#" role="button">
                <i className="fab fa-instagram"></i>
              </a> */}

            {/* </div> */}

          </div>
        </section>
      </div>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <a 
          href="https://icngcis.org" 
          className="text-white text-decoration-none"
          target="" 
          rel="noopener noreferrer"
        >
          © 2025 ICNXCIS. All rights reserved.
        </a>
      </div>
    </footer>
   </>
  )
}

export default Footer;

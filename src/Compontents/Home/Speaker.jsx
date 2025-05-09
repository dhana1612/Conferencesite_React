import React from 'react'
import { Link } from 'react-router-dom'

export default function Speaker() {

  
  return (
    <>

        <section
          className="p-5"
          style={{
            backgroundImage: "url('images/photo13.jpg')",
            backgroundRepeat: "no-repeat",
            objectFit: "fill",
          }}
          id="speaker"
        >
          <div className="container p-2">
            <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">
              Key Invites
            </h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-95">
                  <img src="images/avator1.png" className="card-img-top" alt="Hollywood Sign on The Hill" />
                  <div className="card-body d-flex flex-column text-center">
                    <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                    <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                    <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-95">
                  <img src="images/avator2.png" className="card-img-top" alt="Palm Springs Road" />
                  <div className="card-body d-flex flex-column text-center">
                    <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                    <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                    <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-95">
                  <img src="images/avator1.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
                  <div className="card-body d-flex flex-column text-center">
                    <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                    <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                    <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-95">
                  <img src="images/avator2.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
                  <div className="card-body d-flex flex-column text-center">
                    <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                    <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                    <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-start mt-4">
              <Link className="btn btn-primary px-4 py-2 fs-5 fw-bold" to="/Speaker">
                More
              </Link>
            </div> */}
          </div>
        </section>
     
     

    </>
  )
}

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
                <div className="card shadow-lg d-flex flex-column h-100">
                  <img src="images/avator1.png" className="card-img-top" alt="Hollywood Sign on The Hill" />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title fw-bold">Mona</h4>
                    <p className="card-text fs-5">
                      A speaker should have deep knowledge and experience in their field
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-100">
                  <img src="images/avator2.png" className="card-img-top" alt="Palm Springs Road" />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title fw-bold">John</h4>
                    <p className="card-text fs-5">
                      A great speaker captivates the audience with their energy and storytelling
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-100">
                  <img src="images/avator1.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title fw-bold">Lisa</h4>
                    <p className="card-text fs-5">
                      A speaker should exude confidence and authority on their topic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg d-flex flex-column h-100">
                  <img src="images/avator2.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title fw-bold">Kevin</h4>
                    <p className="card-text fs-5">
                      Good speakers interact with and relate to their audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-start mt-4">
              <Link className="btn btn-primary px-4 py-2 fs-5 fw-bold" to="/Speaker">
                More Speaker
              </Link>
            </div>
          </div>
        </section>
     
     

    </>
  )
}

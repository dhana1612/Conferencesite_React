import React from 'react'
import { Venue } from '../Home/Venue'

export default function SpeakerHome() {
  return (
    <>
        <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('./images/photo18.jpeg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Key Invites</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
        </div>


        <section className="p-5" id="speaker">
      <div className="container p-2">
        <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">Key Invites</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator1.webp" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator2.webp" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator1.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator2.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator1.webp" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator2.webp" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator2.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg d-flex flex-column h-95">
              <img src="/images/avator1.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold" style={{ marginBottom: '0.5rem' }}>Person</h4>
                <p className="card-text fs-5" style={{ marginBottom: '0.3rem' }}>Position</p>
                <p className="card-text fs-6" style={{ marginBottom: '0' }}>Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>



             {/* Venue Section */}
            <Venue/>
    
    </>
  )
}

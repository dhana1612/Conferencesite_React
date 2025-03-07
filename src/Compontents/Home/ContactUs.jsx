import React from 'react'

export default function ContactUs() {
  return (
   <>
      <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('/public/Images/Photo22.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Contact Us</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>


      <section className="contact-our-area pb-3 mx-auto" id="contact">
            <div className="container pb-5 pt-5 text-black">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <h5 className="text-uppercase text-info fs-3">Any concerns?</h5>
                            {/* {message && (
                                <div className={`alert alert-${messageType}`}>{message}</div>
                            )} */}
                            <p className="text-uppercase text-primary fs-4 fw-bold">Contact Us</p>
                        </div>
                    </div>
                </div>

                <div className="row gy-4 justify-content-between">
                    <div className="col-12 col-md-7" id="contact-form">
                        <div className="contact_form_area">
                            <form id="main_contact_form">
                                <div className="row gy-3">
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className="form-control fs-5"
                                            name="FirstName"
                                            placeholder="Your Name *"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className="form-control fs-5"
                                            name="LastName"
                                            placeholder="Last Name *"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="email"
                                            className="form-control fs-5"
                                            name="Email"
                                            placeholder="E-mail *"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className="form-control fs-5"
                                            name="PhoneNumber"
                                            placeholder="Your Number *"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control fs-5"
                                            name="Message"
                                            placeholder="Your Message *"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <div className="col-12 text-start">
                                        <button type="submit" className="btn btn-primary fs-5 px-4 py-2 fw-bold">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contact-information">
                            <div className="mb-3">
                                <h5 className="mb-1 text-primary fs-5 fw-bold">Address:</h5>
                                <p className="fs-4">Avinashi Road, Neelambur, Coimbatore</p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-1 text-primary fs-5 fw-bold">Phone:</h5>
                                <p className="fs-4">+91 98422 62396</p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-1 text-primary fs-5 fw-bold">Email:</h5>
                                <p className="fs-4">icngcs25@psgitech.ac.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <!--MapSection--> */}
        <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308436.5138084717!2d79.09197384202913!3d12.941258620178797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3893a209c55b%3A0xb3649fe847b74dca!2sBrain%20Insight!5e1!3m2!1sen!2sin!4v1739039836803!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
        </div>
   </>
  )
}

import React from 'react'

export default function Contact() {
  return (
    <>
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
    </>
  )
}

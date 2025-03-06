import React from 'react'

export default function Registration_Details() {
  return (
   <>
       <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('public/Images/Photo23.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Registration Details</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>


       <div className="container my-5 px-4">
            {/* Payment Instructions Section */}
            <div className="mb-5 text-center">
                <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">Payment Instructions</h5>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 fs-4">
                        <div className="alert alert-info shadow-sm fw-semibold">Registration fee is payable only after your article is accepted.</div>
                        <div className="alert alert-warning shadow-sm fw-semibold">Payment options: Online Transfer (NEFT / IMPS) or Cash Deposit.</div>
                        <div className="alert alert-info shadow-sm fw-semibold">After payment, send proof (Screenshot / Reference Number / Transaction ID or Counter Slip) along with your Paper ID.</div>
                        <div className="alert alert-warning shadow-sm fw-semibold">At least one author of each accepted paper must register and attend the conference.</div>
                        <div className="alert alert-info shadow-sm fw-semibold">Selected paper abstracts will be published in the conference proceedings with ISBN.</div>
                    </div>
                </div>
            </div>

            {/* Bank Details Section */}
            <div className="text-center">
                <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">Bank Details</h5>
            </div>

            <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "700px" }}>
                <div className="card-body p-4 fs-4">
                    <table className="table table-borderless align-middle">
                        <tbody className="fw-semibold">
                            <tr className="border-bottom">
                                <td className="text-end text-muted pe-4">Account Name:</td>
                                <td className="text-start text-dark">J.K. Jothi Kalpana, Professor, Dept. of Computer Science & Engineering, VRS College of Engineering and Technology, Arasur.</td>
                            </tr>
                            <tr className="border-bottom">
                                <td className="text-end text-muted pe-4">Account Number:</td>
                                <td className="text-start text-dark">045100050302269</td>
                            </tr>
                            <tr className="border-bottom">
                                <td className="text-end text-muted pe-4">Branch:</td>
                                <td className="text-start text-dark">Villupuram</td>
                            </tr>
                            <tr className="border-bottom">
                                <td className="text-end text-muted pe-4">IFSC Code:</td>
                                <td className="text-start text-dark">TMBL0000045</td>
                            </tr>
                            <tr>
                                <td className="text-end text-muted pe-4">MICR:</td>
                                <td className="text-start text-dark">605060005</td>
                            </tr>
                        </tbody>
                    </table>
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
                  PSG Institute of Technology and Applied Research
                  <br />
                  Avinashi Road, Neelambur, Coimbatore,
                  <br />
                  Tamilnadu
                </p>
              </div>
            </div>
            {/* When Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center align-items-start">
                <i className="fa-solid fa-calendar-alt text-success fs-1 mb-3"></i>
                <p className="display-5 fw-bold">When</p>
                <div className="border-bottom border-success border-3 w-25 mb-3"></div>
                <p className="mt-2 fs-4 text-center">23<sup>rd</sup> - 24<sup>th</sup> August, 2024</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/Author_s_Desk/Registration_Details" className="btn bg-success text-light fs-4 btn-lg">
              Register Here
            </a>
          </div>
        </div>
      </section>
   </>
  )
}

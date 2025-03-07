import React from 'react'

export default function Speaker() {

  const speakers = [
    {
      name: "Emily Dawson",
      image: "/Images/s6.jpg",
      alt: "Emily Dawson",
      description: "A speaker should have deep knowledge and experience in their field",
    },
    {
      name: "Dr. Michael Carter",
      image: "/Images/s2.jpeg",
      alt: "Dr. Michael Carter",
      description: "A great speaker captivates the audience with their energy and storytelling",
    },
    {
      name: "Lisa Chen",
      image: "/Images/s4.jpg",
      alt: "Lisa Chen",
      description: "A speaker should exude confidence and authority on their topic.",
    },
    {
      name: "Kevin Brooks",
      image: "/Images/s5.jpeg",
      alt: "Kevin Brooks",
      description: "Good speakers interact with and relate to their audience.",
    },
    {
      name: "Prof. Sophia Patel",
      image: "/Images/s7.jpeg",
      alt: "Prof. Sophia Patel",
      description: "A speaker should have deep knowledge and experience in their field",
    },
    {
      name: "Dr. Michael Carter",
      image: "/Images/s8.jpg",
      alt: "Dr. Michael Carter",
      description: "A great speaker captivates the audience with their energy and storytelling",
    },
    {
      name: "Lisa Chen",
      image: "/Images/s1.jpg",
      alt: "Lisa Chen",
      description: "A speaker should exude confidence and authority on their topic.",
    },
    {
      name: "Kevin Brooks",
      image: "/Images/s3.jpeg",
      alt: "Kevin Brooks",
      description: "Good speakers interact with and relate to their audience.",
    },
  ];
  return (
    <>

      <div id="intro-example" className="img-fluid animated fadeIn" style={{ height: "30vh", marginTop: "80px", width: "100%", backgroundImage: "url('public/Photo18.jpeg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="mask w-100 h-100  bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">Speaker</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>

      <section className="p-5" id="speaker">
      <div className="container p-2">
        <h5 className="text-uppercase text-primary fs-3 fw-bold pb-4">Speakers</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {speakers.map((speaker, index) => (
            <div className="col" key={index}>
              <div className="card shadow-lg d-flex flex-column h-100">
                <img src={speaker.image} className="card-img-top" alt={speaker.alt} />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title fw-bold">{speaker.name}</h4>
                  <p className="card-text fs-5">{speaker.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

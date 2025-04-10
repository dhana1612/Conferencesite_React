import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewPaperSubmission() {
  const [formData, setFormData] = useState({
    Papertitle: '',
    AuthorFullName: '',
    AuthorMobile: '',
    AuthorEmail: '',
    AuthorInstitution: '',
    AuthorCategory: '',
    PaperFile: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();

    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://icngcis.org/submit-paper.php', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Submission failed. Please try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="img-fluid animated fadeIn"
        style={{
          height: "30vh",
          marginTop: "80px",
          width: "100%",
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/712/130/non_2x/stack-of-books-on-wooden-table-against-blue-background-free-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="mask w-100 h-100 bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-start px-3 animated slideInDown">
            <h2 className="fw-bold display-5 text-uppercase text-light">New Paper Submission</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="text-start px-3">
            <h2 className="fw-bold text-start display-6 text-uppercase text-primary">Paper Submission</h2>
          </div>
          <p className="pb-4 fs-4 text-justify">
            Welcome to the paper submission portal. Please fill out the required details and upload your research paper for review.
            Ensure that all information provided is accurate to facilitate smooth processing.
          </p>

          <div className="row">
            {/* Form Section */}
            <div className="col-lg-6 col-12 fs-4 border border-2 rounded py-5">
              <div className="container">
                <h2 className="text-center text-primary">Submit Your Paper</h2>
                {message && <div className="alert alert-info">{message}</div>}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label className="form-label">Paper Title *</label>
                    <input type="text" className="form-control" name="Papertitle" value={formData.Papertitle} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Author Full Name *</label>
                    <input type="text" className="form-control" name="AuthorFullName" value={formData.AuthorFullName} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Author Mobile Number *</label>
                    <input type="text" className="form-control" name="AuthorMobile" value={formData.AuthorMobile} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Author Email *</label>
                    <input type="email" className="form-control" name="AuthorEmail" value={formData.AuthorEmail} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Author Institution *</label>
                    <input type="text" className="form-control" name="AuthorInstitution" value={formData.AuthorInstitution} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Author Category *</label>
                    <select className="form-select" name="AuthorCategory" value={formData.AuthorCategory} onChange={handleChange} required>
                      <option value="">-- Select Category --</option>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="researcher">Researcher</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Upload Paper (PDF/DOC) *</label>
                    <input type="file" className="form-control" name="PaperFile" accept=".pdf,.doc,.docx" onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Submit Paper</button>
                </form>
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
              <div className="bg-light p-5 rounded shadow-lg" style={{ fontSize: '1.25rem' }}>
                <h2 className="fs-3 fw-bold mb-4 text-primary">Submission Guidelines</h2>
                <ul className="list-unstyled text-secondary">
                  <li>✅ Ensure all author details are correctly filled.</li>
                  <li>✅ Upload a PDF or Word document of the paper.</li>
                  <li>✅ Only one submission per author will be accepted.</li>
                  <li>✅ Follow the formatting guidelines provided.</li>
                </ul>
                <h2 className="fs-3 fw-bold mt-5 mb-4 text-primary">Important Notes</h2>
                <ul className="list-unstyled text-secondary">
                  <li>⚠ Verify the accuracy of the contact details before submission.</li>
                  <li>⚠ The first author will be contacted for further correspondence.</li>
                  <li>⚠ Submissions must be made before the deadline date.</li>
                  <li>⚠ Late submissions may not be considered for review.</li>
                </ul>
              </div>
            </div>
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
                   <Link to="/authors/registration-details" className="btn bg-success text-light fs-4 btn-lg">
                     Register Here
                   </Link>
                 </div>
               </div>
             </section>
    </>
  );
}

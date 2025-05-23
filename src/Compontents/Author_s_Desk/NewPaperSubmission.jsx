import React, { useState } from 'react';
import { Venue } from '../Home/Venue'
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
<div id="intro-example" className="img-fluid animated fadeIn position-relative overflow-hidden" style={{ height: "30vh", marginTop: "80px", width: "100%" }}>
  {/* Blurred Background Layer */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/712/130/non_2x/stack-of-books-on-wooden-table-against-blue-background-free-photo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: 1
  }}></div>

  {/* Content Layer with Dark Overlay */}
  <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }}>
    <div className="text-white text-start px-3 animated slideInDown">
      <h2 className="fw-bold display-5 text-uppercase text-light">Paper Submission</h2>
      <div className="divider mx-auto my-3"></div>
    </div>
  </div>
</div>


      {/* Submission Form */}
      <div className="container my-5">
        <div className="row justify-content-center flex-lg-row flex-column-reverse">
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
                <input
                  type="text"
                  className="form-control"
                  name="AuthorMobile"
                  value={formData.AuthorMobile}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                    handleChange({ target: { name: 'AuthorMobile', value: onlyNums } });
                  }}
                  inputMode="numeric"
                  required
                />
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
            <div className=" p-5 rounded shadow-lg" style={{ fontSize: '1.25rem' }}>
              <h2 className="fs-3 fw-bold mb-4 text-primary">Submission Guidelines</h2>
             <ul style={{ listStyleType: "circle" }} className="list-unstyled text-secondary">

                <li>Ensure all author details are correctly filled.</li>
                <li>Upload a PDF or Word document of the paper.</li>
                <li>Only one submission per author will be accepted.</li>
                <li>Follow the formatting guidelines provided.</li>
              </ul>
              <h2 className="fs-3 fw-bold mt-5 mb-4 text-primary">Important Notes</h2>
              <ul style={{ listStyleType: "circle" }} className="list-unstyled text-secondary">
                <li>Verify the accuracy of the contact details before submission.</li>
                <li>The first author will be contacted for further correspondence.</li>
                <li>Submissions must be made before the deadline date.</li>
                <li>Late submissions may not be considered for review.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Section */}
      <Venue />
    </>
  );
}

import React, { useState } from 'react';

export default function ContactUs() {

    const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
    
        const [message, setMessage] = useState('');
        const [messageType, setMessageType] = useState('');
    
        // Handle input change
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
    
        // Handle form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const requestData = {
                user_name: `${formData.firstName} ${formData.lastName}`,
                user_email: formData.email,
                subject: 'Contact Form Submission',
                message: formData.message,
            };
    
            try {
                const response = await fetch('https://icngcis.org/sentmail.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    setMessage('Your message has been sent successfully!');
                    setMessageType('success');
                    setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
                } else {
                    setMessage(data.error || 'Failed to send message.');
                    setMessageType('danger');
                }
            } catch (error) {
                console.error('Error sending message:', error);
                setMessage('An error occurred. Please try again later.');
                setMessageType('danger');
            }};
  return (
   <>
<div id="intro-example" className="img-fluid animated fadeIn position-relative overflow-hidden" style={{ height: "30vh", marginTop: "80px", width: "100%" }}>
  <div className="blur-background position-absolute top-0 start-0 w-100 h-100" style={{
    backgroundImage: "url('./images/photo22.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: 1
  }}></div>

  <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
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
                                {message && <div className={`alert alert-${messageType}`}>{message}</div>}
                                <p className="text-uppercase text-primary fs-4 fw-bold">Contact Us</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4 justify-content-between">
                        <div className="col-12 col-md-7" id="contact-form">
                            <div className="contact_form_area">
                                <form id="main_contact_form" onSubmit={handleSubmit}>
                                    <div className="row gy-3">
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form-control fs-5"
                                                name="firstName"
                                                placeholder="Your Name *"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form-control fs-5"
                                                name="lastName"
                                                placeholder="Last Name *"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="email"
                                                className="form-control fs-5"
                                                name="email"
                                                placeholder="E-mail *"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form-control fs-5"
                                                name="phoneNumber"
                                                placeholder="Your Number *"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control fs-5"
                                                name="message"
                                                placeholder="Your Message *"
                                                rows="3"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
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
                                    <h5 className="mb-1 text-primary fs-4 fw-bold">Address:</h5>
                                    <p className="fs-5"> Chennai, India</p>
                                </div>
                                <div className="mb-3">
                                    <h5 className="mb-1 text-primary fs-4 fw-bold">Phone:</h5>
                                    <p className="fs-5">+91 1212121212</p>
                                </div>
                                <div className="mb-3">
                                    <h5 className="mb-1 text-primary fs-4 fw-bold">Email:</h5>
                                    <p className="fs-5"> xxx@icngcs.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        {/* <!--MapSection--> */}
        {/* <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38608.08970498705!2d80.20416861304467!3d12.896949827501366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7c3b310a53%3A0xf1a81050650e77fc!2sNovotel%20Chennai%20OMR!5e1!3m2!1sen!2sin!4v1746557319721!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
        </div> */}
   </>
  )
}

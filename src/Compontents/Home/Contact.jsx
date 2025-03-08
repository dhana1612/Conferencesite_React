import React, { useState } from 'react';

export default function Contact() {
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
            const response = await fetch('http://localhost:3000/api/contact', {
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
        }
    };

    return (
        <>
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
    );
}

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-contact-area contact ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Contact Us</span>
            <h2>Drop us a message for any query</h2>
          </div>

          <div className="contact-wrap contact-pages mb-0">
            <div className="contact-form">
              <form
                method="POST"
                action="https://getform.io/f/7dfd5257-8a24-4d05-ac75-d036663e8afb"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Number</label>
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder="Write your message..."
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12 text-end">
                    <button type="submit" className="default-btn btn-two">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

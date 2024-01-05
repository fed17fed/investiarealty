"use client"
import React, { useState } from 'react';

const Form = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
});

// Function to update state on input change
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

// Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    // Function to send email will be called here
    sendEmail(formData);
}

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Textarea
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols={30}
              rows={4}
              placeholder="There are many variations of passages."
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

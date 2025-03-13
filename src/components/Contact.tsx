import React from "react";

export default function Contact() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              ติดต่อ
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">หน้าหลัก</li>
            </ol>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Map Column */}
            <div className="col-lg-8 mb-4">
              {/* Embedded Google Map */}
              <iframe
                width="100%"
                height="300px"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed"
              />
            </div>
            {/* Contact Details Column */}
            <div className="col-lg-4 mb-4 contact-right">
              <h3>Contact Details</h3>
              <p>
                3481 Melrose Place
                <br />
                Beverly Hills, CA 90210
                <br />
              </p>
              <p>
                <abbr title="Phone">P</abbr>: (123) 456-7890
              </p>
              <p>
                <abbr title="Email">E</abbr>:
                <a href="mailto:name@example.com">name@example.com</a>
              </p>
              <p>
                <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00
                PM
              </p>
            </div>
          </div>
          {/* /.row */}
          {/* Contact Form */}
          {/* In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. */}
          <div className="row">
            <div className="col-lg-8 mb-4 contact-left">
              <h3>Send us a Message</h3>
              <form name="sentMessage" id="contactForm" noValidate="">
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required=""
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block" />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      required=""
                      data-validation-required-message="Please enter your phone number."
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required=""
                      data-validation-required-message="Please enter your email address."
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Message:</label>
                    <textarea
                      rows={5}
                      cols={100}
                      className="form-control"
                      id="message"
                      required=""
                      data-validation-required-message="Please enter your message"
                      maxLength={999}
                      style={{ resize: "none" }}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div id="success" />
                {/* For success/fail messages */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}

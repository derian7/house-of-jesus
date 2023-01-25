import React from "react";
import "./styles/HomeContact.css";

const HomeContact = () => {
  return (
    <div id="home-contact">
      <div class="container section" id="home-contact-container">
        <div className="home-contact-half" id="home-contact-info">
          <h2>Schedule an Appointment</h2>
          <h5>
            In order to bring you the best service possible, please give us a
            call for any questions or to schedule an appointment.
          </h5>
          <p>
            For more information how to get in touch with us or if you'd prefer
            to write us a question, please visit our contact page.
          </p>
          <a className="button" href="/" id="home-contact-button">
            Contact
          </a>
        </div>
        <div className="home-contact-half" id="home-contact-box-container">
          <div>
            <div className="contact-method">
              <h5>
                <i class="ri-phone-line"></i>
              </h5>
              <div>
                <h5>Phone</h5>
                <p>402-405-8577</p>
              </div>
            </div>
            <div className="contact-method">
              <h5>
                <i class="ri-map-2-line"></i>
              </h5>

              <div>
                <h5>Location</h5>
                <p>512 Village Ave</p>
                <p>Lincoln, NE 68503</p>
              </div>
            </div>
            <div className="contact-method">
              <h5>
                <i class="ri-mail-send-line"></i>
              </h5>
              <div>
                <h5>Email</h5>
                <p>email@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;

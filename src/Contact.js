import React from "react"

import contactImage from "./images/contact_image/contact.jpg"

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="contact-image-wrapper">
          <img className="contact-logo" src={contactImage} alt="Contact Info" />
        </div>
        <div className="contact-info-wrapper">
          <div className="contact-text">Store Hours: Mon-Sat 9am-7pm</div>
          <div className="contact-text">Email: creationstation@test.com</div>
        </div>
      </div>
    </div>
  )
}

export default Contact

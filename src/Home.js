import React from "react"
import { Link } from "react-router-dom"

import woodImage from "./images/wood_image/wood.jpg"
import contactImage from "./images/contact_image/contact.jpg"
import flowerImage from "./images/flower_image/flower.png"

const Home = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <img className="wood-img" src={woodImage} alt="Wood Background" />
        <div className="text-container">
          <div className="heading-text">Creation Station</div>
          <div className="subheading-text">Crafts & Graphics</div>
        </div>
      </div>

      <div className="featured-products-container">
        <div className="featured-products-text">
          Featured products will go here....
        </div>
        {/* <Link to="/products">See more</Link> */}
      </div>

      <div className="featured-special-orders-container">
        <img
          className="featured-special-orders-wood"
          src={woodImage}
          alt="Wood Background"
        />
        <div className="featured-special-orders-text">
          Featured special orders will go here....
        </div>
        {/* <Link to="special-orders">See more</Link> */}
      </div>

      <div className="contact-container">
        <div className="contact-image-container">
          <img
            className="contact-image"
            src={contactImage}
            alt="Contact Info"
          />
          {/* <Link className="contact-us-link" to="/contact">
            Contact Us
          </Link> */}
        </div>
      </div>
      <img className="flower-img" src={flowerImage} alt="Flower" />
    </div>
  )
}
export default Home

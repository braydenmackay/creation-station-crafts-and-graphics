import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="home-link">
        Home
      </Link>
      <Link to="/products" className="products-link">
        Products
      </Link>
      <Link to="/special-orders" className="special-orders-link">
        Special Orders
      </Link>
      <Link to="/contact" className="contact-link">
        Contact Us
      </Link>
    </div>
  )
}

export default Navigation

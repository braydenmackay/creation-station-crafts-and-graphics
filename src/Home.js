import React from "react"
import woodImage from "./images/wood_image/wood.jpg"

const Home = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <img className="wood-img" src={woodImage} alt="Background-img" />
        <div className="text-container">
          <div className="heading-text">Creation Station</div>
          <div className="subheading-text">Crafts & Graphics</div>
        </div>
      </div>

      <div className="featured-products-container">
        <div className="featured-products">
          <div className="featured-products-text">
            Here will go featured products....
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./Home"
import flowerImage from "./images/flower_image/flower.png"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <img className="flower-img" src={flowerImage} alt="Flower Image" />
    </div>
  )
}

export default App

import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero jumbotron jumbotron-fluid col-10 offset-1">
      <div className="hero__wrapper">
        <img
          className="hero__logo"
          alt="conductor logo"
          src="./images/conductor.png"
        />
        <h1 className="hero__title">Composers Quiz</h1>
        <p>Select the work written by the composer shown</p>
      </div>
      <button className="hero__addBtn btn col-1.5 offset-10">
        {" "}
        <Link to="/add">Add a composer</Link>
      </button>
    </div>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Turn from "./Turn";
import Footer from "./Footer";

function ComposerQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid quiz-wrapper">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      {/* <Continue show={highlight === "correct"} onContinue={onContinue} />
      <p>
        <Link to="/add">Add a composer</Link>
      </p> */}
      <Footer highlight={highlight} onContinue={onContinue} />
    </div>
  );
}

export default ComposerQuiz;

import React from "react";
import "../styles/App.scss";

import Hero from "./Hero";
import Turn from "./Turn";
import Footer from "./Footer";

function ComposerQuiz({
  composer,
  works,
  highlight,
  onAnswerSelected,
  onContinue
}) {
  return (
    <div className="container-fluid quiz-wrapper">
      <Hero />
      <Turn
        composer={composer}
        works={works}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Footer highlight={highlight} onContinue={onContinue} />
    </div>
  );
}

export default ComposerQuiz;

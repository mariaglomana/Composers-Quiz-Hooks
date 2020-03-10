import React, { useState } from "react";

import ComposerQuiz from "../components/ComposerQuiz";
import { shuffle, sample } from "underscore";

function ComposerQuizWrapper({ composers }) {
  const turnData = getTurnData(composers);
  let [highlight, setHighlight] = useState("");
  let [composerTurn, setComposerTurn] = useState(turnData.composer);
  let [worksTurn, setWorksTurn] = useState(turnData.works);

  const onAnswerSelected = answer => {
    const isCorrect = composerTurn.works.some(work => work === answer);
    setHighlight(isCorrect ? "correct" : "wrong");
  };

  function resetState() {
    const turnData = getTurnData(composers);
    setHighlight("");
    setComposerTurn(turnData.composer);
    setWorksTurn(turnData.works);
  }

  function getTurnData(composers) {
    const allWorks = composers.reduce(
      (acc, currentVal) => acc.concat(currentVal.works),
      []
    );
    const fourRandomWorks = shuffle(allWorks).slice(0, 4);
    const answer = sample(fourRandomWorks);
    return {
      works: fourRandomWorks,
      composer: composers.find(composer =>
        composer.works.some(title => title === answer)
      )
    };
  }

  return (
    <ComposerQuiz
      composer={composerTurn}
      works={worksTurn}
      highlight={highlight}
      onAnswerSelected={onAnswerSelected}
      onContinue={resetState}
    />
  );
}

export default ComposerQuizWrapper;

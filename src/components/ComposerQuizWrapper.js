import React from "react";

import ComposerQuiz from "./ComposerQuiz";
import { shuffle, sample } from "underscore";
import composers from "../data/composers";

function resetState() {
  return { turnData: getTurnData(composers), highlight: "" };
}

let state = resetState();

function getTurnData(composers) {
  const allWorks = composers.reduce(function(acc, currentVal) {
    return acc.concat(currentVal.works);
  }, []);
  const fourRandomWorks = shuffle(allWorks).slice(0, 4);
  const answer = sample(fourRandomWorks);
  return {
    works: fourRandomWorks,
    composer: composers.find(composer =>
      composer.works.some(title => title === answer)
    )
  };
}
function onAnswerSelected(answer) {
  const isCorrect = state.turnData.composer.works.some(work => work === answer);
  state.highlight = isCorrect ? "correct" : "wrong";
}

function ComposerQuizWrapper() {
  return (
    <ComposerQuiz
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={() => {
        state = resetState();
      }}
    />
  );
}

export default ComposerQuizWrapper;

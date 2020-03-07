import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddComposerForm from "./AddComposerForm";
import ComposerQuiz from "./ComposerQuiz";
import { shuffle, sample } from "underscore";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import composers from "./data/composers";

function resetState() {
  return { turnData: getTurnData(composers), highlight: "" };
}

let state = resetState();

function App() {
  return (
    <ComposerQuiz
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={() => {
        state = resetState();
        render();
      }}
    />
  );
}

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
  render();
}

const ComposerWrapper = withRouter(({ history }) => (
  <AddComposerForm
    onAddComposer={composer => {
      composers.push(composer);
      history.push("/");
    }}
  />
));

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <>
        <Route exact path="/" component={App} />
        <Route path="/add" component={ComposerWrapper} />
      </>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

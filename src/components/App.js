import React from "react";
import { Route } from "react-router-dom";
import composers from "../data/composers";

import ComposerQuizWrapper from "./ComposerQuizWrapper";
import AddComposerWrapper from "./AddComposerWrapper";

function App() {
  const addComposer = composer => {
    composers.push(composer);
  };

  return (
    <>
      <Route
        exact
        path="/"
        render={routerProps => <ComposerQuizWrapper composers={composers} />}
      />

      <Route
        path="/add"
        render={routerProps => <AddComposerWrapper addComposer={addComposer} />}
      />
    </>
  );
}

export default App;

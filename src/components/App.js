import React from "react";
import { Route } from "react-router-dom";
import composers from "../data/composers";

import ComposerQuizWrapper from "./ComposerQuizWrapper";
import AddComposerWrapper from "./AddComposerWrapper";

function App() {
  return (
    <>
      <Route
        exact
        path="/"
        render={routerProps => <ComposerQuizWrapper composers={composers} />}
      />

      <Route path="/add" component={AddComposerWrapper} />
    </>
  );
}

export default App;

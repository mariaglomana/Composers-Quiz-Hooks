import React from "react";
import { Route } from "react-router-dom";

import ComposerQuizWrapper from "./ComposerQuizWrapper";
import AddComposerWrapper from "./AddComposerWrapper";

function App() {
  return (
    <>
      <Route exact path="/" component={ComposerQuizWrapper} />
      <Route path="/add" component={AddComposerWrapper} />
    </>
  );
}

export default App;

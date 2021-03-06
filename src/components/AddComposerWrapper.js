import React from "react";
import AddComposer from "./AddComposer";
import { withRouter } from "react-router-dom";

const AddComposerWrapper = withRouter(({ history, addComposer }) => (
  <AddComposer
    onAddComposer={composer => {
      addComposer(composer);
      history.push("/");
    }}
  />
));
export default AddComposerWrapper;

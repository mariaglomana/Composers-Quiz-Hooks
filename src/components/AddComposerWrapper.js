import React from "react";
import AddComposer from "./AddComposer";
import { withRouter } from "react-router-dom";
import composers from "../data/composers";

const AddComposerWrapper = withRouter(({ history }) => (
  <AddComposer
    onAddComposer={composer => {
      composers.push(composer);
      history.push("/");
    }}
  />
));
export default AddComposerWrapper;

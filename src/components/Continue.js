import React from "react";

function Continue({ show, onContinue }) {
  return (
    <div className="continue">
      {show ? (
        <button
          className="continue__btn btn btn-primary  col-2 offset-8"
          onClick={onContinue}
        >
          Continue
        </button>
      ) : null}
    </div>
  );
}

export default Continue;

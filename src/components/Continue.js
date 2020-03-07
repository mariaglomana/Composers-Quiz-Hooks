import React from "react";

function Continue({ show, onContinue }) {
  return (
    <div className="continue">
      {show ? (
        <div className="">
          <button
            className="continue__btn btn btn-primary  col-1 float-right "
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Continue;

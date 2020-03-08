import React from "react";

function Work({ title, onClick }) {
  return (
    <div
      className="work__answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h5>{title}</h5>
    </div>
  );
}

export default Work;

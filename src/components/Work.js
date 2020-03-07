import React from "react";

function Work({ title, onClick }) {
  return (
    <div
      className="work__answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
}

export default Work;

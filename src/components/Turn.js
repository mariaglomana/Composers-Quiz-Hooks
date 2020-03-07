import React from "react";
import Work from "./Work";
import PropTypes from "prop-types";
const colorGreen = "#A3CB38";
const colorRed = "#EA2027";

function Turn({ composer, works, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: "",
      correct: colorGreen,
      wrong: colorRed
    };
    return mapping[highlight];
  }

  return (
    <div
      className="row turn__wrapper col-10 offset-1"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img
          src={composer.imageUrl}
          className="turn__composerImage"
          alt="Composer"
        />
      </div>

      <div className="col-6">
        {works.map(title => (
          <Work title={title} key={title} onClick={onAnswerSelected}></Work>
        ))}
      </div>
    </div>
  );
}

export default Turn;

Turn.propTypes = {
  composer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    works: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  works: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

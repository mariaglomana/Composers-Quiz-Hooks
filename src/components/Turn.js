import React from "react";
import Work from "./Work";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import ToggleContent from "./ToggleContent";
import Modal from "./Modal";

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
      className="row turn__wrapper col-9 offset-1"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <ToggleContent
          toggle={show => (
            <>
              <img
                src={composer.imageUrl}
                className="turn__composerImage"
                alt="Composer"
                onClick={show}
                data-tip="Click here to know who I am"
              />
              <ReactTooltip
                place="top"
                type="light"
                multiline="true"
                effect="float"
              />
            </>
          )}
          content={hide => (
            <Modal>
              This is a test <button onClick={hide}>Close</button>
            </Modal>
          )}
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

import React from "react";

function ComposerDetail({ composer }) {
  return (
    <div className="detail">
      <div className="detail__wrapper">
        <h2 className="detail__title">{composer.name}</h2>
        <div className="detail__content">
          <img
            src={composer.imageUrl}
            className="detail__composerImage"
            alt="Composer"
          />
          <p>{composer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ComposerDetail;

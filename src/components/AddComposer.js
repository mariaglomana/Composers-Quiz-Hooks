import React, { useState, createRef } from "react";
import "../styles/AddComposer.scss";
import cameraIcon from "../images/camera.svg";

const ComposerForm = ({ onAddComposer }) => {
  let [name, setName] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [works, setWorks] = useState([]);
  let [workInput, setWorkInput] = useState("");
  let [isPhotoDefault, setIsPhotoDefault] = useState(true);
  const myFileField = createRef();

  const handleSubmit = event => {
    event.preventDefault();
    onAddComposer({ name, imageUrl, works });
  };

  const onUploadImage = event => {
    const files = event.target.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = ev => {
        setImageUrl(ev.target.result);
        setIsPhotoDefault(false);
      };
    }
  };

  const handleFilePicker = () => {
    myFileField.current.click();
  };

  const getPreview = () => {
    return !isPhotoDefault ? { backgroundImage: `url(${imageUrl})` } : {};
  };

  const handleAddWork = event => {
    setWorks(works.concat([workInput]));
    setWorkInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="addComposer__form">
        <div>
          <div className="addComposer__form--input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="addComposer__form--input">
            <div className="addComposer__form--worksLabel">
              <label htmlFor="workInput">Works</label>
              <input type="button" value="+" onClick={handleAddWork} />
            </div>
            {works.map(work => (
              <p key={work}>{work}</p>
            ))}{" "}
            <input
              type="text"
              name="workInput"
              value={workInput}
              onChange={e => setWorkInput(e.target.value)}
            />
          </div>
        </div>
        <div className="addComposer__form--input">
          <label htmlFor="btnAddImage">Image</label>
          <div className="addComposer__form--photoWrapper">
            <button
              className="addComposer__form--photoBtn"
              type="button"
              onClick={handleFilePicker}
            >
              {" "}
              <img src={cameraIcon} className="icon" alt="Subir imagen" />
            </button>
            <input
              className="addComposer__form--input-file"
              id="bntFileAddImage"
              type="file"
              name="imageUrl"
              ref={myFileField}
              onChange={onUploadImage}
              required
            />
            <div
              className="addComposer__form--image-preview"
              style={getPreview()}
            ></div>
          </div>
        </div>
      </div>
      <input className="addComposer__form--btn" type="submit" value="Add" />
    </form>
  );
};

function AddComposer({ match, onAddComposer }) {
  return (
    <div className="addComposer container-fluid ">
      <div className="addComposer__wrapper">
        <h1 className="ddComposer__title">Add composer</h1>
        <ComposerForm onAddComposer={onAddComposer} />
      </div>
    </div>
  );
}

export default AddComposer;

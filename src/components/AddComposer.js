import React, { useState, createRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/AddComposer.scss";
import cameraIcon from "../images/camera.svg";

const ComposerForm = ({ onAddComposer }) => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [works, setWorks] = useState([]);
  let [workInput, setWorkInput] = useState("");
  let [isPhotoDefault, setIsPhotoDefault] = useState(true);
  const myFileField = createRef();

  toast.configure({
    autoClose: 2000,
    draggable: false,
    position: toast.POSITION.TOP_LEFT
  });
  const notify = () =>
    toast.info("Your composer has been successfully added!", {
      position: toast.POSITION.TOP_RIGHT,
      className: "sentForm-toast",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

  const handleSubmit = event => {
    event.preventDefault();

    onAddComposer({ name, imageUrl, works, description });
    notify();
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
        <div className="addComposer__form--section">
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
            <label htmlFor="name">Description</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              rows="2"
            >
              Add here some text about the composer's life...
            </textarea>
          </div>
          <div className="addComposer__form--input">
            <div className="addComposer__form--worksLabel">
              <label htmlFor="workInput">Works</label>
            </div>
            {works.map(work => (
              <p key={work}>{work}</p>
            ))}{" "}
            {works.length < 3 && (
              <div className="addComposer__form--workElem">
                <input
                  type="text"
                  name="workInput"
                  value={workInput}
                  onChange={e => setWorkInput(e.target.value)}
                />
                <button type="button" value="+" onClick={handleAddWork}>
                  +
                </button>
              </div>
            )}
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

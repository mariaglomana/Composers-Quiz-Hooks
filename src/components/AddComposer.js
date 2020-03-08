import React, { useState, createRef } from "react";

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
      <div className="AddComposer__input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="AddComposer__input">
        <label htmlFor="btnAddImage" className="fill__label">
          Image
        </label>
        <div className="fill__file-picker-wrapper">
          <button
            className="fill__button"
            type="button"
            onClick={handleFilePicker}
          >
            {" "}
            <img src="/images/camera.svg" className="icon" alt="Subir imagen" />
          </button>
          <input
            className="fill__input-file"
            id="bntFileAddImage"
            type="file"
            name="imageUrl"
            ref={myFileField}
            onChange={onUploadImage}
            required
          />
          <div className="fill__image-preview" style={getPreview()}></div>
        </div>
      </div>
      <div className="AddComposer__input">
        <label htmlFor="workInput">Works</label>
        {works.map(work => (
          <p key={work}>{work}</p>
        ))}{" "}
        <input
          type="text"
          name="workInput"
          value={workInput}
          onChange={e => setWorkInput(e.target.value)}
          required
        />
        <input type="button" value="+" onClick={handleAddWork} />
      </div>

      <input type="submit" value="Add" />
    </form>
  );
};

function AddComposer({ match, onAddComposer }) {
  return (
    <div className="container-fluid col-10">
      <h1>Add composer</h1>
      <ComposerForm onAddComposer={onAddComposer} />
    </div>
  );
}

export default AddComposer;

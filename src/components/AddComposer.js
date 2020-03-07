import React from "react";

class ComposerForm extends React.Component {
  constructor(props) {
    super(props);
    this.myFileField = React.createRef();

    this.state = {
      name: "",
      imageUrl: "",
      works: [],
      workTemp: "",
      isPhotoDefault: true
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.onUploadImage = this.onUploadImage.bind(this);
    this.handleFilePicker = this.handleFilePicker.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddComposer(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onUploadImage(event) {
    const files = event.target.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = ev => {
        this.setState({
          imageUrl: ev.target.result,
          isPhotoDefault: false
        });
      };
    }
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  getPreview() {
    return !this.state.isPhotoDefault
      ? { backgroundImage: `url(${this.state.imageUrl})` }
      : {};
  }

  handleAddWork(event) {
    this.setState({
      works: this.state.works.concat([this.state.workTemp]),
      workTemp: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="AddComposer__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        {/* Image */}
        <div className="AddComposer__input">
          <label htmlFor="btnAddImage" className="fill__label">
            Image
          </label>
          <div className="fill__file-picker-wrapper">
            <button
              className="fill__button"
              type="button"
              onClick={this.handleFilePicker}
            >
              {" "}
              <img
                src="/images/camera.svg"
                className="icon"
                alt="Subir imagen"
              />
            </button>
            <input
              className="fill__input-file"
              id="bntFileAddImage"
              type="file"
              name="imageUrl"
              ref={this.myFileField}
              // disabled={}
              // value={this.state.imageUrl}

              onChange={this.onUploadImage}
              required
            />
            <div
              className="fill__image-preview"
              style={this.getPreview()}
            ></div>
          </div>
        </div>
        {/* Works */}
        <div className="AddComposer__input">
          <label htmlFor="workTemp">Works</label>
          {this.state.works.map(work => (
            <p key={work}>{work}</p>
          ))}{" "}
          <input
            type="text"
            name="workTemp"
            value={this.state.workTemp}
            onChange={this.onFieldChange}
          />
          <input type="button" value="+" onClick={this.handleAddWork} />
        </div>

        <input type="submit" value="Add" />
      </form>
    );
  }
}

function AddComposer({ match, onAddComposer }) {
  return (
    <div className="container-fluid col-10">
      <h1>Add composer</h1>
      <ComposerForm onAddComposer={onAddComposer} />
    </div>
  );
}

export default AddComposer;

import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );

export default Modal;

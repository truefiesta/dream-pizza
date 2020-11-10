import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./modal-container.css";

const ModalContainer = ({children, setOpen}) => {
  const closeModal = () => {
    setOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <div onClick={closeModal} className="modal-shadow" />
      <section className="modal-main">
        <button
          className="modal-close"
          onClick={closeModal}
          type="button"
        >
          Close
        </button>
        {children}
      </section>
    </>,
    document.getElementById('modal')
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
  setOpen: PropTypes.func.isRequired,
}

export default ModalContainer;

import React from "react";
import PropTypes from "prop-types";

import "./modal.css";

const Modal = ({children, onClose, show}) => {
  const showHideClassName = show ? "modal modal-show" : "modal-hide"

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button
          className="modal-close"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default Modal;

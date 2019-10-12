import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

/**
 * @description Reusable Modal Component
 * @param {object} props
 * @returns {JSX}
 */
function Modal({ children, movieTitle, hideModal, classes }) {
  return (
    <div className="overlay">
      <div className={`cart-modal ${classes}`}>
        <button type="button" className="close" onClick={hideModal}>&times;</button>
        <h3 className="comment">Movie Comments</h3>
        <h4>{movieTitle}</h4>
        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
  classes: PropTypes.string,
  movieTitle: PropTypes.string
};

Modal.defaultProps = {
  classes: '',
  movieTitle: ''
}
export default Modal;
import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="container">
        <div className="modal" id="modal">
          <h2>{this.props.coords}</h2>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
          </button>
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

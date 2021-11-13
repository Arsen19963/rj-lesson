import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTaskModal extends Component {
  state = {
    localValue: "",
  };
  handleChange = ({ target }) => {
    this.setState({ localValue: target.value });
  };

  render() {
    return (
      <div className="modal-container">
        <div className="modal-container-inner">
            <div onClick={this.props.handleClose}>X</div>
          <input value={this.state.localValue} onChange={this.handleChange} />
          <button onClick={() => this.props.handleSubmit({name: this.state.localValue})}>submit</button>
        </div>
      </div>
    );
  }
}

AddTaskModal.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func

};

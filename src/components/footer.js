import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    inputValue: null,
  };
  handChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handAlertInputValue = () => {
    alert(this.state.inputValue);
  };
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}} >
        <div style={{display: "flex"}}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handChange}
          />
          <input
            type="text"
            style={{maxWidth: 50}}
            value={this.state.value}
            onChange={this.handChange}
          />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handChange}
          />
        </div>
        <button onClick={this.handAlertInputValue}> = </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Header extends Component {
  handleGetButtonText = () => {
    // return this.props.them === "#ddce60" ? "dark mode" : "light mode"
    switch (this.props.them) {
      case "#ddce60": return "dark mode" 
      case "#aaa": return "light mode" 
        
      default: return "#ddce60"
 
    }
  }
  render() {
    return (
      <header className="main-header">
        <button onClick={this.props.handleToggleThem}>
          {this.handleGetButtonText()}
        </button>
        <h1> log </h1>
        <h2> user </h2>
      </header>
    );
  }
}

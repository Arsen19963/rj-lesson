import React, { Component } from "react";
import { login } from "../service";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = () => {
    login(this.state).then((res) => localStorage.setItem("token",res.data.token));
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          name="email"
          onChange={this.handleChange}
          value={email}
          type="email"
        />
        <input
          name="password"
          onChange={this.handleChange}
          value={password}
          type="password"
        />
        <button onClick={this.handleSubmit}>login</button>
      </div>
    );
  }
}

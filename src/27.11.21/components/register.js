import React, { Component } from "react";
import { register } from '../service'

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: 0,
  };
  handleSubmit = (event) => {
      register(this.state)
      .then(res => console.log(res))
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { name, email, password, age } = this.state;
    return (
      <div>
        <input
          name="name"
          onChange={this.handleChange}
          value={name}
          type="text"
        />
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
        <input
          name="age"
          onChange={this.handleChange}
          value={age}
          type="number"
        />
        <button onClick={this.handleSubmit}>register</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import Register from "./components/register";
import Login from "./components/login";
import { addTask, getAllTasks } from "./service";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    description: "",
    tasks: null,
  };
  handleGetTasks = () => {
    getAllTasks().then((res) => this.setState({ tasks: res.data.data }));
  };
  handleAddTask = () => {
    addTask({ description: this.state.description }).
    then((res) =>
      this.handleGetTasks(res)
    );
  };
  componentDidMount() {
    getAllTasks().then((res) => this.setState({ tasks: res.data.data }));
  }

  render() {
    return (
      
      <BrowserRouter>
        <div 
          style={{ display: "flex", flexDirection: "column", maxWidth: 200 }}
          >
          <header>
            <ul>
              <Link to="/">
                <li>login</li>
              </Link>
              <Link to="/register">
              <li>register</li>
              </Link>
              <Link to="/register">
              <li>task</li>
              </Link>
            </ul>
          </header>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/task" element={<Login />}/>
          </Routes>
          {/* <button onClick={this.handleGetTasks}>get tasks</button> */}

          <input
            name="description"
            value={this.state.description}
            onChange={(e) => {
              this.setState({ description: e.target.value });
            }}
            />
          <button onClick={this.handleAddTask}>Add Task</button>
          {this.state.tasks &&
            this.state.tasks.map((elem) => {
              return <div>{elem.description}</div>;
            })}
        </div>
            </BrowserRouter>
          
    );
  }
}

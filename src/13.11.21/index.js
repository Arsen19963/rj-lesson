import React, { Component } from "react";
import Header from "./components/header";
import TaskList from "./components/taskList";
import AddTaskModal from "./components/addTaskModal";

export default class Main extends Component {
  state = {
    taskList: [],
    showAddModal: false,
  };
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers", {
      method: "GET"
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }
  
  handleShowModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };
  handleAddTask = (newElem) => {
    this.setState({ taskList: [newElem, ...this.state.taskList] });
    this.handleShowModal();
  };
  render() {
    const { taskList, showAddModal } = this.state;
    return (
      <div>
        {showAddModal && <AddTaskModal handleClose={this.handleShowModal} handleSubmit={this.handleAddTask} />}
        <Header />
        <div>
          <button onClick={this.handleShowModal}>add task</button>
        </div>
        <TaskList taskList={taskList} />
      </div>
    );
  }
}

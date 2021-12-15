import React, { Component } from "react";
import GetImg from "./getImg";
import { UsersContext } from "../App";
import UsersConsumerHoc from '../Hoc/';
const fileSystem = {
  path: "",
  name: "photos",
  type: "directory",
  children: [
    {
      path: "summer",
      name: "summer",
      type: "directory",
      children: [
        {
          path: "summer/june",
          name: "june",
          type: "directory",
          children: [
            {
              path: "summer/june/windsurf.jpg",
              name: "windsurf.jpg",
              type: "file",
              description: "windsurf",
            },
          ],
        },
      ],
    },
    {
      path: "winter",
      name: "winter",
      type: "directory",
      children: [
        {
          path: "winter/january",
          name: "january",
          type: "directory",
          children: [
            {
              path: "winter/january/ski.png",
              name: "ski.png",
              type: "file",
              description: "ski",
            },
            {
              path: "winter/january/snowboard.jpg",
              name: "snowboard.jpg",
              type: "file",
              description: "snowboard",
            },
          ],
        },
      ],
    },
  ],
};
 class Main extends Component {
  state = {
    path: "",
    currentPath: null,
    name: "",
  };
  handleFunction = (file) => {
    if (!file.children) {
      return;
    }
    console.log(file);
    file.children.forEach((element) => {
      this.handleFunction(element);
    });
  };
  nextRout = (elem) => {
    console.log(this);
    return () => {
      if (elem.children) {
        console.log(elem.children);
        this.setState({
          currentPath: elem.children,
          path: "/",
          name: "./public/",
        });
      }
    };
  };

  getDirectionByPath = (path) => {
    console.log(this);
    if (path === "") {
      return (
        <GetImg
          key={fileSystem.path}
          elem={fileSystem}
          nextRout={this.nextRout}
        />
      );
    }
    return this.state.currentPath.map((item) => (
      <GetImg elem={item} key={item.path} nextRout={this.nextRout} />
    ));
  };
  render() {
    console.log(this.props)
    return  this.getDirectionByPath(this.state.path)
        
  }
}
export default UsersConsumerHoc(Main);
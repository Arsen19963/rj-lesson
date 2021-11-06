import React from "react";
import Header from "./components/header";
import Center from "./components/center";
import Footer from "./components/footer";

//props

export default class App extends React.Component {
  state = {
    them: "#ddce60"
  }
  handleToggleThem = () => {
    this.setState({them: "#aaa"})
  }
  render() {
    return (
      <div>
        <Header them = {this.state.them} handleToggleThem={this.handleToggleThem} />
        <Center them = {this.state.them} count={5} age={26} />
        <Footer />
      </div>
    );
  }
}

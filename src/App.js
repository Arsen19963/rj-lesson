import React from "react";
import Header from "./components/header";
import Center from "./components/center";
import Footer from "./components/footer";
import { themEnum } from "./enums";
//props

export default class App extends React.Component {
  state = {
    them: themEnum.dark,
  };
  handleToggleThem = () => {
    // if (this.state.them === "#ddce60") {
    //   this.setState({ them: "#aaa" });
    // } else {
    //   this.setState({ them: "#ddce60" });
    // }
    this.setState({
      them: this.state.them === themEnum.dark ? themEnum.light : themEnum.dark,
    });
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <Header
          them={this.state.them}
          handleToggleThem={this.handleToggleThem}
        />
        <Center them={this.state.them} count={5} age={26} />
        <Footer />
      </div>
    );
  }
}

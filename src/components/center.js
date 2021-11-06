import React, { Component } from "react";

let a = 1;
let b = 2;
// a = 2
// b = 1
const list = [
  { name: "Haykaz", id: 1 },
  { name: "Vardgez", id: 2 },
  { name: "Sahak", id: 3 },
  { name: "Karen", id: 4 },
  { name: "Sergey", id: 5 },
];
export default class Center extends Component {
  state = {
    showList: false,
    count: 0,
  };
  handleChangeListCondition = () => {
    const { showList } = this.state;
    this.setState({ showList: !showList });
  };
  handleIncrement = () => {
    let { count } = this.state;
    this.setState({ count: ++count });
  };

  render() {
    console.log(this.props)
    return (
      <div style={{backgroundColor:this.props.them}}>
        <button onClick={this.handleChangeListCondition}> toggle list </button>
        {this.state.showList && (
          <ul>
            {list.map((elem) => {
              return <li key={elem.id}>{elem.name}</li>;
            })}
          </ul>
        )}
        <h3>{this.state.count}</h3>
        <button onClick={this.handleIncrement}>increment</button>
        <button>decrement</button>
        <button>rest</button>
        {/* if value === -  */}
        <button> toggle value </button>

      </div>
    );
  }
}

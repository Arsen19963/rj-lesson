import React, { Component } from "react";
import Beer from "./beer";
const getBeers = () => {
  return fetch("https://api.punkapi.com/v2/beers", {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

export default class BeersContainer extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    getBeers().then((res) => this.setState({ beers: res }));
  }
  render() {
    const { beers } = this.state;
    return (
      <div className="beers-container">
        {beers &&
          beers.map((elem, index) => {
            return <Beer  key={index} {...elem} />;
          })}
      </div>
    );
  }
}

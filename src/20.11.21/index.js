// https://api.punkapi.com/v2/beers

import React, { Component } from "react";
import Beer from "./components/beer";
import Astro from "./components/astro";
import Loader from "react-loader-spinner";
const getBeers = () => {
  return fetch("https://api.punkapi.com/v2/beers", {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};
const getUsers = () => {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: "paul rudd",
      movies: ["I Love You Man", "Role Models"],
    }),
  }).then((res) => res.json());
};

export default class Main extends Component {
  componentDidMount() {
    setTimeout(() => {
      getBeers().then((res) => this.setState({ beers: res }));
    }, 5000);
    getUsers().then((res) => console.log(res));
  }
  state = {
    beers: null,
    activeTab: 0,
  };
  handelChangeTab = (index) => () => {
    this.setState({ activeTab: index });
  };
  render() {
    const { beers, activeTab } = this.state;
    return (
      <>
        <span onClick={this.handelChangeTab(0)}>astro</span>
        <span onClick={this.handelChangeTab(1)}>beers</span>
        {!beers && (
          <Loader type="TailSpin" color="#00BFFF" height={300} width={300} />
        )}
        {activeTab === 1 ? (
          <Astro />
        ) : (
          <div className="beers-container">
            {beers &&
              beers.map((elem, index) => {
                return <Beer key={index} {...elem} />;
              })}
          </div>
        )}
      </>
    );
  }
}

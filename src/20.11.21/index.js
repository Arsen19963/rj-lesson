// https://api.punkapi.com/v2/beers

import React, { Component } from "react";
// import Beer from "./components/beer";
import Astro from "./components/astro";
// import Loader from "react-loader-spinner";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeersContainer from "./components/beersContainer";
import BeerDetails from "./components/beerDetails";


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
   
    return (
      <BrowserRouter>
        <>
          <Header />

          <Routes>

            <Route path="/" element={<Astro />}/>
            <Route path="/beer" element={<BeersContainer />}/>
            <Route path="/beer/:beerId" element={<BeerDetails />} />

          </Routes>
        {/* */}


          {/* <span onClick={this.handelChangeTab(0)}>astro</span>
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
          )} */}
        </>
      </BrowserRouter>
    );
  }
}

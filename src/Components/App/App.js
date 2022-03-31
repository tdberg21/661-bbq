/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import RatingsContainer from "../RatingsContainer/RatingsContainer";
import { mockRestaurants } from "../../assets/mock-data";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    restaurants: [...mockRestaurants],
  };

  addRestaurant = (newRestaurant) => {
    this.setState({
      restaurants: [newRestaurant, ...this.state.restaurants],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          addRestaurant={(newRestaurant) => this.addRestaurant(newRestaurant)}
        />
        <RatingsContainer restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;

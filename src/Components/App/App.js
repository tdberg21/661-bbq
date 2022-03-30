/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import RatingsContainer from "../RatingsContainer/RatingsContainer";

const mockRestaurants = [
  {
    mealChoice: "Brisket Meal",
    restaurantName: "AJs Pit BBQ",
    location: "Denver, CO",
    dateVisited: "2022-03-10",
    mealRating: "7.6",
    experienceDescription: "Really good Texas style bbq.",
  },
  {
    mealChoice: "Pulled Pork Sandwich",
    restaurantName: "Pee Wees",
    location: "Blacksburg, VA",
    dateVisited: "2007-03-03",
    mealRating: "8.9",
    experienceDescription: "My favorite place at college, gone too soon",
  },
];

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

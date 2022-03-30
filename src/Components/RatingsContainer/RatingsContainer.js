import React, { Component } from "react";
import Ratings from "../Ratings/Ratings";
import "./RatingsContainer.css";

class RatingsContainer extends Component {
  restaurantsToDisplay = (restaurants) =>
    restaurants.map((restaurant, index) => {
      return <Ratings {...restaurant} key={`${index} + ${restaurant.name}`} />;
    });

  render() {
    return (
      <div className="ratings-container-component">
        {this.restaurantsToDisplay(this.props.restaurants)}
      </div>
    );
  }
}

export default RatingsContainer;

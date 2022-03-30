/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import bbqPic from "../../assets/bbq-pic.jpeg"
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    mealChoice: "",
    restaurantName: "",
    location: "",
    dateVisited: "",
    mealRating: "",
    experienceDescription: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newRestaurant = { ...this.state };
    this.props.addRestaurant(newRestaurant);
  };

  render() {
    return (
      <div className="form-component">
        <form className="restaurant-form">
        <h4>Add new restaurant:</h4>
          <label htmlFor="restaurant-name">What BBQ joint did you try?</label>
          <input
            id="restaurant-name"
            className="restaurant-name__input"
            aria-label="Please Enter The BBQ Joint Name"
            placeholder="Restaurant Name"
            type="text"
            name="restaurantName"
            value={this.state.restaurantName}
            onChange={this.handleChange}
          />
          <label htmlFor="location">Where is it located?</label>
          <input
            id="location"
            className="location__input"
            aria-label="Restaurant Location"
            placeholder="City, State"
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label htmlFor="date-visited">When did you eat here?</label>
          <input
            id="date-visited"
            className="date-visited__input"
            aria-label="Please Enter The Date Visited"
            placeholder="Date Visited"
            type="date"
            name="dateVisited"
            value={this.state.dateVisited}
            onChange={this.handleChange}
          />
          <label htmlFor="meal-choice">What did you eat?</label>
          <input
            id="meal-choice"
            className="meal-choice__input"
            aria-label="Please Enter What You Ate"
            placeholder="Pulled pork, brisket, ribs, etc.."
            type="text"
            name="mealChoice"
            value={this.state.mealChoice}
            onChange={this.handleChange}
          />
          <label htmlFor="meal-rating">
            How would you rate the food (0-10)?
          </label>
          <input
            id="meal-rating"
            className="meal-rating__input"
            aria-label="Please Enter A Rating"
            placeholder="0-10 score"
            type="number"
            name="mealRating"
            value={this.state.mealRating}
            onChange={this.handleChange}
          />
          <label htmlFor="experience-description">
            How would you describe the experience?
          </label>
          <input
            id="experience-description"
            className="experience-description__input"
            aria-label="How would you describe the experience?"
            placeholder="Description..."
            type="text"
            name="experienceDescription"
            value={this.state.experienceDescription}
            onChange={this.handleChange}
          />
          <button
            className="submit-button"
            aria-label="Submit Review Button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        <img src={bbqPic} alt="BBQ Pic"></img>
      </div>
    );
  }
}

export default Form;

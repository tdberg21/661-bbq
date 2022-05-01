/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { signupUser } from '../../helpers/api-calls';

class SignupForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = { ...this.state };
    console.log(user);
    const token = await signupUser(user);
    this.props.setToken(token);
  };

  render() {
    if(this.props.token) {
      return <div>You are now signed up!</div>
    }
    return (
      <div className="signupform-component">
        <form className="restaurant-form">
          <h4>Please signup:</h4>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            className="username__input"
            aria-label="Username Input"
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">email:</label>
          <input
            id="email"
            className="email__input"
            aria-label="email Input"
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password:</label>
          <input
            id="password"
            className="password__input"
            aria-label="password Input"
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
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
      </div>
    );
  }
}

export default SignupForm;

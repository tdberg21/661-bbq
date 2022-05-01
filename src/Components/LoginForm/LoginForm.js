/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { loginUser } from '../../helpers/api-calls';

class LoginForm extends Component {
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
    const token = await loginUser(user);
    this.props.setToken(token);
  };

  render() {
    if(this.props.token) {
      return <div>Successfully logged in!</div>
    }
    return (
      <div className="loginform-component">
        <form className="restaurant-form">
          <h4>Please login:</h4>
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

export default LoginForm;

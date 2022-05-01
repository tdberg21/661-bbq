/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-useless-constructor */
import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import RatingsContainer from "../RatingsContainer/RatingsContainer";
import {
  fetchVisitedRestaurants,
  addVisitedRestaurant,
} from "../../helpers/api-calls";
import Home from "../Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    restaurants: [],
    token: "",
  };

  async componentDidMount() {
    const restaurantsFromDB = await fetchVisitedRestaurants();
    const token = this.getToken();
    this.setState({ restaurants: [...restaurantsFromDB], token });
  }

  addRestaurant = async (newRestaurant) => {
    const results = await addVisitedRestaurant(newRestaurant);
    console.log(results);
    this.setState({
      restaurants: [newRestaurant, ...this.state.restaurants],
    });
  };

  getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  setToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    this.setState({
      token: userToken,
    });
  };

  logoutUser = () => {
    console.log("logout");
    sessionStorage.removeItem("token");
    this.setState({ token: "" });
  };

  render() {
    const token = this.getToken();
    return (
      <div className="App">
        <Header token={this.state.token} logoutUser={this.logoutUser} />
        <button onClick={this.logoutUser}>Logout</button>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginForm token={this.state.token} setToken={this.setToken} />
            }
          />
          <Route
            path="/register"
            element={
              <SignupForm token={this.state.token} setToken={this.setToken} />
            }
          />
          <Route
            path="/ratings"
            element={<RatingsContainer restaurants={this.state.restaurants} />}
          />
          <Route
            path="/"
            element={
              <Home
                addRestaurant={(newRestaurant) =>
                  this.addRestaurant(newRestaurant)
                }
                restaurants={this.state.restaurants}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;

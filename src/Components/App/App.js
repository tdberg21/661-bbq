import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Ratings from '../Ratings/Ratings';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    restaurants: []
  }

  addRestaurant = (newRestaurant) => {
    this.setState({
      restaurants: [...this.state.restaurants, newRestaurant]
    })
  }

  render() { 
    return (     
      <div className="App">
        <Header />        
        <Form addRestaurant={(newRestaurant) => this.addRestaurant(newRestaurant)}/>
        <Ratings restaurants={this.state.restaurants} />
      </div> 
    );
  }
}
 
export default App;

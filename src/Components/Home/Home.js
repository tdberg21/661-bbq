import React from 'react';
import Form from '../Form/Form';
import RatingsContainer from '../RatingsContainer/RatingsContainer';

const Home = (props) => {
  return ( 
  <div className='home-component'>
    <Form addRestaurant={(newRestaurant) =>
                  props.addRestaurant(newRestaurant)
                }/>
    <RatingsContainer restaurants={props.restaurants}/>

  </div> );
}
 
export default Home;
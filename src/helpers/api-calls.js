export const fetchVisitedRestaurants = async (user_id) => {
  const url = `http://localhost:3000/api/v1/restaurants/`;
  const response = await fetch(url);
  const results = await response.json();
  return await results;
};

export const addVisitedRestaurant = async (newRestaurant) => {
  const { mealChoice, restaurantName, location, dateVisited, mealRating, experienceDescription } = newRestaurant;
  const url = `http://localhost:3000/api/v1/restaurants`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mealChoice,
      restaurantName,
      location,
      dateVisited,
      mealRating,
      experienceDescription, })
};
  const response = await fetch(url, requestOptions);
  const results = await response.json();
  return await results;
};

export const loginUser = async (credentials) => {
  const token = fetch('http://localhost:3000/api/v1/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())

   return token;
}

export const signupUser = async (credentials) => {
  console.log(credentials)
  const token = fetch('http://localhost:3000/api/v1/users/new', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())

   return token;
}

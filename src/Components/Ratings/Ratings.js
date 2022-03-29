const Ratings = (props) => {
  return (
    <div className="ratings-card">
      <h1>{props.restaurantName}</h1>
      <p>What I Ate: {props.mealChoice}</p>
      <p>Location: {props.location}</p>
      <p>Date Visited: {props.dateVisited}</p>
      <p>Rating: {props.mealRating}</p>
      <p>Description: {props.experienceDescription}</p>
    </div>
  );
};

export default Ratings;

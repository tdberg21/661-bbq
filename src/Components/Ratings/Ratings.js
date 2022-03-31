import "./Ratings.css";

const Ratings = (props) => {
  return (
    <div className="ratings-card">
      <h1>{props.restaurantName}</h1>
      <p><span className="restaurant-bold-text">What I Ate: </span>{props.mealChoice}</p>
      <p><span className="restaurant-bold-text">Location: </span> {props.location}</p>
      <p><span className="restaurant-bold-text">Date Visited: </span> {props.dateVisited}</p>
      <p><span className="restaurant-bold-text">Rating: </span> {props.mealRating}</p>
      <p><span className="restaurant-bold-text">Restaurant: </span> {props.experienceDescription}</p>
    </div>
  );
};

export default Ratings;

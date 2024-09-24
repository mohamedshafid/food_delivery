import React, { useContext } from "react";
import "./FoodItem.css";
import { Link } from "react-router-dom";
const FoodItem = ({ id, name, description, rating, price, image }) => {
  
  return (
    <div className="fooditem">
      <div className="fooditems">
        <Link to={`/foods/${id}`}><img src={image} alt=""   /></Link>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="rating">
          <p>{rating}</p>
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

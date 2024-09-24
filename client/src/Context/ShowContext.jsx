import React, { createContext, useState } from 'react';
import { food_list } from "../assets/assets";

export const ShowContext = createContext();


const ShowContextProvider = (props) => { 

  const url_api = "http://localhost:8000";
  
  const [foodQuantity, setFoodQuantity] = useState({});
  const [total_price, setTotalPrice] = useState(0);
  const [token,setToken]=useState(null);
  let cart_count = 0;



  // add food to cart.
  const addFood = (food, quantity) => {
    console.log(quantity);
    if(foodQuantity[food.id] && foodQuantity[food.id]==quantity) return;
    setFoodQuantity({ ...foodQuantity, [food.id]:quantity});
  };

  console.log(foodQuantity);

  // remove food from cart
  const removeFood = (food) => {
    const newFoodQuantity = { ...foodQuantity };
    newFoodQuantity[food.id]=0;
    setFoodQuantity(newFoodQuantity);
    cart_count = 0;
    for (let key in foodQuantity) {
      if (foodQuantity[key] > 0)
      {
         cart_count += 1;
      }
    }
    console.log(cart_count);

  };
  for (let key in foodQuantity) {
    if (foodQuantity[key] > 0)
    {
    cart_count += 1;
    }
  }


  


  const value = {
    food_list,
    addFood,
    foodQuantity,
    removeFood,
    cart_count,
    url_api,
    total_price,
    setTotalPrice,
    token,
    setToken

  }
  return (
    <>
    <ShowContext.Provider value={value}>
       {props.children}
    </ShowContext.Provider>
    </>
  );
}

export default ShowContextProvider;

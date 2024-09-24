import React from 'react';
import { useContext } from 'react';
import "./MenuList.css";
import { ShowContext } from '../../Context/ShowContext';
import FoodItem from '../FoodItem/FoodItem';

const MenuList = ({category,setCategory}) => {
  const {food_list} = useContext(ShowContext);
  return (
    <div className="menulist">
      <div className="menulist-content">
        <h1>Foods Near you</h1>
        <p>You can get some Tasty today! picking up a right food</p>
        </div>
      <div className="menulist-container">
        {
          food_list.map((item, index) =>
          {
            if (category == "All" || category === item.category)
            {
              return <FoodItem key={index} id={item.id} name={item.name} rating={item.rating} price={item.price} description={item.description} image={item.image} /> 
            }
          })
        }
      </div>
    </div>
  )
}

export default MenuList;

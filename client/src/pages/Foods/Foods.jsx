import React, { useContext, useState } from "react";
import "./Foods.css";
import { ShowContext } from "../../Context/ShowContext";
import { unstable_HistoryRouter, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import {
  faPerson,
  faPlus,
  faBagShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodItem from "../../components/FoodItem/FoodItem";
import delivery_boy from "../../assets/delivery-boy.png";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

const Foods = () => {
  window.scrollTo(0, 0);
  const { food_list, addFood } = useContext(ShowContext);
  const { foodId } = useParams();
  const food = food_list.find((food) => food.id === Number(foodId));
  //picking the food category
  const related_category = food_list.filter(
    (foods) => foods.category === food.category && foods.id !== food.id
  );
  const food_category = [];
  for (let i of related_category) {
    food_category.push(i);
  }
  //use navigate hook
  const navigate=useNavigate();
  // add to cart
  const handlecart = () => {
    toast.success("success notification!");
    if (quantity == 0)
    {
      alert("select the amount of food you needed !");
      return;
    }
   

    addFood(food, quantity);
    const path="/"
    navigate(path);

    
  }

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="foods">
      <hr />
      <div className="foods-container">
        <div className="foods-container-left">
          <img src={food.image} alt="" />
          <p>
            <span>50%</span> discount
          </p>
          <FontAwesomeIcon icon={faPlus} className="fa-plus" size="2x" />
        </div>
        <div className="foods-container-right">
          <div className="foods-right-content">
            <h1>{food.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sit praesentium quidem dolor doloribus laboriosam
              adipisci, blanditiis tempore nisi recusandae asperiores cum illo.
              Earum officia et magnam blanditiis quo totam facilis dolorem
              laboriosam dolore at. Doloribus iste enim culpa quaerat.
            </p>
          </div>
          <div className="foods-right-persons">
            <div
              className="box box1"
              onClick={() => setQuantity(1)}
              id={quantity === 1 ? "active" : ""}
            >
              1
            </div>
            <div
              className="box box2"
              onClick={() => setQuantity(2)}
              id={quantity === 2 ? "active" : ""}
            >
              2
            </div>
            <div
              className="box box3"
              onClick={() => setQuantity(3)}
              id={quantity === 3 ? "active" : ""}
            >
              3
            </div>
            <div
              className="box box4"
              onClick={() => setQuantity(4)}
              id={quantity === 4 ? "active" : ""}
            >
              4
            </div>
            <FontAwesomeIcon
              icon={faBagShopping}
              size="3x"
              style={{ color: "black" }}
            />
          </div>
          <p className="delivery">
            <span>20-25min </span>Delivery
          </p>
          <p className="price">Price: {food.price} $ per 2 persons</p>
          <button
            className="btn"
            onClick={handlecart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="related-foods">
        <h1>
          Related <span>Foods</span>
        </h1>
        <hr />
        <div className="related-foods-list">
          {food_category.map((item, index) => (
            <div className="related-foods-list-item" key={food.id}>
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                rating={item.rating}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="driver">
        <div className="driver-content">
          <h1>
            Get your <span style={{color:"orange",fontSize:"4rem"}}>FOOD DELIVERED</span>
          </h1>
          <p>Get your food delivered to your doorstep with in 20-25 minutes</p>
        </div>
        <img
          src={delivery_boy}
          alt=""
          style={{ height: "100px", width: "100px" }}
        />
        <hr className="delivery-hr"/>
      </div>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <p>Lets know what others think of us!</p>
        <div className="testimonials-container">
          <div className="testi">
            <img src={p1} alt="" />
            <div className="testi-content">
              <h1>Jackson</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                possimus recusandae eius. Illum, autem? Tenetur reprehenderit
                fuga maiores itaque, nostrum dolorem illo. Minus voluptatibus
                non quos consequatur numquam odit ut?
              </p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="testi">
            <img src={p2} alt="" />
            <div className="testi-content">
              <h1>Johnson</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                possimus recusandae eius. Illum, autem? Tenetur reprehenderit
                fuga maiores itaque, nostrum dolorem illo. Minus voluptatibus
                non quos consequatur numquam odit ut?
              </p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="testi">
            <img src={p3} alt="" />
            <div className="testi-content">
              <h1>Rulekha</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                possimus recusandae eius. Illum, autem? Tenetur reprehenderit
                fuga maiores itaque, nostrum dolorem illo. Minus voluptatibus
                non quos consequatur numquam odit ut?
              </p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;

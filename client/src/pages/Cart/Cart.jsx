import React, { useContext } from "react";
import "./Cart.css";
import { ShowContext } from "../../Context/ShowContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, foodQuantity, removeFood ,total_price,setTotalPrice} = useContext(ShowContext);
  const navigate = useNavigate();
  let value = 0;
  return (
    <div className="cart">
      <div className="cart-items cart-items-title">
        <p>Item</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cart-item">
      {food_list.map((item, index) => {
        if (foodQuantity[item.id] > 0) {

          value += item.price * foodQuantity[item.id];
          setTotalPrice(value);
          return (
            <>
              <div className="cart-items cart-items-food">
                <img src={item.image} alt="no-food" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{foodQuantity[item.id]}</p>
                <p>{item.price * foodQuantity[item.id]}</p>
                <p onClick={() => removeFood(item)}><FontAwesomeIcon icon={faXmark} size="3x" style={{cursor:"pointer"}} /></p>
              </div>
            </>
          );
        }
      })}
      </div>
      <div className="cart-total">
      <div className="cart-totals">
        <h1 style={{ textAlign:"center"}}>Cart Totals</h1>
        <hr />

        <div className="cart-totals-content">
          <div className="subtotal totals">
            <p>SubTotal</p>
            <p className="price">{String(total_price)+'$'}</p>
          </div>
          <hr style={{background:"black",height:"1px"}} />
          <div className="Delivery-Fee totals">
            <p>Delivery Fee</p>
            <p className="price">{total_price?'40$':'0$'}</p>
          </div>
          <hr style={{background:"black",height:"1px"}}/>
          <div className="total totals">
            <p>Total</p>
            <p className="price">{total_price?String(total_price+40)+'$':'0$'}</p>
          </div>
            <button onClick={() => {
              
              navigate('/orders')
            }}>Proceed to CheckOut</button>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Cart;

import React, { useContext, useState } from 'react';
import './Order.css';
import { ShowContext } from '../../Context/ShowContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Order = () => {
  const { food_list, foodQuantity, removeFood ,total_price,url_api} = useContext(ShowContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    phone:''

  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });


  }
  const placeOrder = async (event) =>
  {
    event.preventDefault();
            const orderItems = [];
            event.preventDefault();
            food_list.map((item) => {
                    if (foodQuantity[item.id] > 0)
                    {
                            let itemInfo = item;
                            itemInfo['quantity'] = foodQuantity[item.id];
                            orderItems.push(itemInfo);
                    }
            });        
            let orderData = {
                    address: data,
                    items: orderItems,
                    amount:total_price,
    }

            const response = await axios.post(`${url_api}/orders/order`, orderData);
            if (response.data.status=="true")
            {
                    const { success_url } = response.data;
                    window.location.replace(success_url);
            }
            else {
                    console.log("error is occured inside the place order");
                    console.log("error occured");
    }
    setData({});
    
    }

  return (
    <div className="orders">
      <div className="cart-details">
        <h1>Ordered Items</h1>
        <hr />
        

      {food_list.map((item, index) => {
        if (foodQuantity[item.id] > 0) {
          return (
            <>
              <div className="order-details">

                <img src={item.image} alt="no-food" style={{borderRadius:"50%"}} />
                <p style={{fontSize:".8rem"}}>{item.name}</p>
                <div className="price">
                <p>Price</p>
                <p>{item.price}</p>
                </div>
                <div className="quantity price">
                <p>Quantity</p>
                <p>{foodQuantity[item.id]}</p>

                </div>
                <div className="total-amount price">
                  <p>Total</p>
                <p>{item.price * foodQuantity[item.id]}</p>

                </div>
              </div>
            </>
          );
        }
      })}
      </div>
      <div className="billing-info">
      <form className="order" onSubmit={placeOrder} >
         <div className="order-left">
            <h1>Delivery Information</h1>
            <hr />
                <div className="multiple-fields">
              <input name="firstName" type="text" placeholder='firstName:' onChange={handleChange} value={data.firstName} />
                                  <input name="lastName" type="text"  placeholder='lastName:' onChange={handleChange} value={data.lastName}/>
                </div>
                          <input type="text" name="street"  placeholder='Street:'  onChange={handleChange} value={data.street}/>

                <div className="mulitple-fields" style={{display:"flex",gap:"5px"}}>
              <input type="text" name="city" placeholder="city:" onChange={handleChange} value={data.city} />
                                  <input type="text" name="state"  placeholder="State:" onChange={handleChange} value={data.state} />
                </div>

               
            <input type="phone" name="phone" placeholder='phone NO:' onChange={handleChange} value={data.phone} />
          </div>
          <button type="submit">Proceed to Pay</button>
    </form>

      </div>
    </div>
  )
}

export default Order;

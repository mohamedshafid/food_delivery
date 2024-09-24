import React from 'react';
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer">
      <hr />
      <div className="offer-header">
        <h1>Special <span>Offer</span></h1>
        <p>You can get the summer offer for 1 month.Enjoy the offer taste some foods!</p>
      </div>
      <div className="offer-banner">
        <div className="offer-banner-left">
          <h1>
                DONT MISS OUR <br /> <span>SPECIAL OFFER</span> 
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis suscipit corporis nihil dolorum animi expedita aut delectus repudiandae tempora et fugit perferendis porro sit necessitatibus, excepturi beatae reiciendis soluta.</p>
          <div className="cashback">
            <h1>50% CASHBACK</h1>
            <h1>Enter your Email to get Offers!</h1>
            <input type="text" placeholder="Your Email:" /><br />
            <button>Submit</button>
          </div>

        </div>
        <div className="offer-banner-right">
           <h1>UPTO <br /><span>50%</span> OFFER</h1>
         </div>
      </div>
    </div>
  )
}

export default Offer;

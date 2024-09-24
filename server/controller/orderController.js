import orderModel from "../model/orderModel.js";
import Stripe from "stripe";


const orderFood = async (req, res) => {
  const frontendUrl = "http://localhost:5173"
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const order = new orderModel({
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    console.log(req.body.items);

    await order.save();

    const line_items = req.body.items.map((items) =>
      ({
              price_data: {
                      currency: "inr",
                      product_data: {
                              name: items.name
                      },
             unit_amount: items.price * 100,
                      
      },
      quantity: items.quantity,
        
      }));

    line_items.push({
      price_data: {
              currency: "inr",
              product_data: {
                      name: "Delivery Fee",
              },
        unit_amount: 40 * 100,
              
      },
      quantity: 1,

    });
    
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontendUrl}/verify?success=true&orderId=${order._id}`,
      cancel_url: `${frontendUrl}/verify?success=false&orderId=${order._id}`,
});

    res.json({ status: "true", success_url: session.url });

  }
  catch (error) {
    console.log(error);
    console.log("error occured");
  }
}
export {
  orderFood,
}
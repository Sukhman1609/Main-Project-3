import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../Styles/cartPage.css';
import Footer from '../Footer/Footer';
import {loadStripe} from '@stripe/stripe-js'
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, calculateTotal,clearCart } = useCart();
  console.log(cart)
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate=useNavigate();
  const handleIncrement = (item) => {
    incrementQuantity(item);
  };

  const handleDecrement = (item) => {
    decrementQuantity(item);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleBuyNow = async() => {

    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
    setTimeout(() => {
      setOrderPlaced(false);
      clearCart(); 
    }, 4000);

const stripe=await loadStripe("pk_test_51OE9GCSBTTGVG4VXvYTZdAZfdsDcKNilDSscK21WRnhtvPpCARFz5v1KYzNXPyzRJNTiAWuFOfFIQ9jMwuCPTpwa00LgTsR5Sm")

const body={
   products:cart
}
const headers={
"Content-Type":"application/json"
}
const response = await fetch("https://asdf-6hl6.onrender.com/api/create-checkout-session",{
  method:"POST",
  headers:headers,
  body:JSON.stringify(body)
})

// const session = await response.json();
 
// const result=stripe.redirectToCheckout({
//   sessionId:session.id
// })

if (response.ok) {
  const session = await response.json();
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.log(result.error);
  } else {
    navigate("/");
    alert("Payment successful! Your order has been placed.");
  }
} else {
  console.error("Failed to create checkout session");
}


  };

  return (
    <div className='cartHead'>
      <h2 style={{ fontSize: '25pt', textAlign: 'center' }}>My Cart</h2>

      {cart.length === 0 ? (
        <>
          <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '18pt' }}>Your cart is empty.</p>
          <img className='empty' src='https://tse2.mm.bing.net/th?id=OIP.W9izZcYxZf_GXgASWt06OgEjDW&pid=Api&P=0&h=180' alt='' />
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div className="cartmain">
                  <div className="left">
                    <img className="cartimg" src={item.bollywoodimg} alt="" />
                  </div>
                  <div className="right">
                    <p style={{ wordWrap: 'break-word' }}>{item.name}</p>{' '}
                    <p style={{ color: 'brown', fontWeight: '500' }}>Price: ₹ {item.price} each{' '}</p>
                    <button onClick={() => handleIncrement(item)}>+</button>{' '}
                    {item.quantity} <button onClick={() => handleDecrement(item)}>-</button> <br />
                    <button onClick={() => handleRemove(item)} style={{ backgroundColor: 'coral' }}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="carttotal">Total Amount: ₹ {calculateTotal(cart)}</p>
          <button className="buybutton" onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}

      {orderPlaced && (
        <>
        <div className="popup-message">
          <p> ✅ Order placed!</p>
          <div className="green-line"></div>
        </div>
         </>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;

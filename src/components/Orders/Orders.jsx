import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData,Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import './Orders.css';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)
   // console.log(savedCart);
   const handleRemoveFromCart = (id)=>{
    const remaining = cart.filter(product=> product._id !== id);
    setCart(remaining);
    removeFromDb(id)
   }

   const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
   }

    return (
      <div className="shop-container">
        <div className="review-container">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link className="proceed-link" to="/checkout">
              <button className="btn-proceed">
                Proceed Checkout
                <FontAwesomeIcon icon={faCreditCard} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Orders;
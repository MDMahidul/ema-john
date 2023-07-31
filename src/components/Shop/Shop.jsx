import React, { useEffect, useState } from "react";
import {
  addToDb,
  getShoppingCart,
  deleteShoppingCart,
} from "../../utilities/fakedb";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage,setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  //const itemsPerPage = 10;
  const {totalProducts} =  useLoaderData();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  const options  = [5,10,20];

  /* 
  1.determine the total number of items
  2.Decide on the number of items per page 
  3.Calculate the total number of page by dividing total items by per page items number
  4.determine the current page
  */

  /* useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json()
      setProducts(data);
    }
    fetchData();
  },[currentPage,itemsPerPage])

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step-1: get id of the addedProduct
    for (const id in storedCart) {
      //step-2: get product from products by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        //step-3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step-4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      //step-5: set the cart
      setCart(savedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    //const newCart = [...cart,product];
    // if productdoesn't exist in the cart, then set quantity = 1
    //if exist update the quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

    const handleSelectChange = (event) => {
      setItemsPerPage(parseInt(event.target.value));
      setCurrentPage(0)
    };

  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="card-container">
          <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link className="proceed-link" to="/orders">
              <button className="btn-proceed">
                Review Order
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}
      <div className="pagination">
        <p>current Page: {currentPage} & items per page : {itemsPerPage}</p>
        {pageNumbers.map((number) => (
          <button onClick={() => setCurrentPage(number)} key={number} className={currentPage === number ? 'selected' : ''}>
            {number}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;

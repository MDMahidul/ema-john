import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("http://localhost:5000/products");
  const products = await loadedProducts.json();

  //if cart data is in database, we have to use async await
  const storedCart = getShoppingCart();
  const savedCart = [];
  console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //if we need to send two things
  //return [products,saveedCart]
  //another option
  //return{products,cart:savedCart}
  return savedCart;
};
export default cartProductsLoader;

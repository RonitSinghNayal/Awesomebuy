import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';
import Footer from './Footer';
import SignupPage from './SignupPage';

function App() {
  const savedDataString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  const handleAddToCart = (productId, count) => {
    let oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("myCart", cartString);
  };

  const handleChangeCount = () => {
    // Implement the logic to change the count of items in the cart
    // For example, you could increment or decrement the count of a specific product
    console.log("Change count logic here");
  };

  const totalCount = Object.keys(cart).reduce((output, current) => {
    return output + cart[current];
  }, 0);

  return (
    <>
      <div>
        <button className='p-2 bg-indigo-700' onClick={handleChangeCount}>
          Change Count
        </button>
      </div>
      <div className='bg-gray-200 h-screen overflow-y-auto'>
        <NavBar productCount={totalCount} />
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route
            path='/products/:id'
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/signup" 
            element={<SignupPage/>}
            />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
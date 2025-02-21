import React, { useState } from 'react'  
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  const savedDataString = localStorage.getItem("myCart") || "{}"
  const savedData = JSON.parse(savedDataString);

  const[cart, setCart] = useState({})

  const handleAddToCart = (productId, count) =>{
    let oldcount = cart[productId] || 0

    const newCart = {...cart, [productId]: oldcount+count}
    setCart(newCart)
    const cartString = JSON.stringify(newCart)
    localStorage.setItem("myCart",cartString)
  }

  const totalCount = Object.keys(cart).reduce(function(output, current){
    return output + cart[current];
  },0);
  
  const path = window.location.pathname;
  
  return (
    <>
    <div>
      <button className='p-2 bg-indigo-700' onClick={handlechangecount}></button>
    </div>
 <div className='bg-gray-200 h-screen overflow-y-auto'>
      <NavBar productCount={totalCount}/>
      <Routes>
          <Route index element={<ProductListPage/>}/>
          <Route path='/products/:id' 
          element={<ProductDetail onAddToCart={handleAddToCart}/>}/>
      </Routes>
      <Footer/>
   </div>
   </>
  );
}

export default App

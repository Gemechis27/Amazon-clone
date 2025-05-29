import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Payment from './pages/Payment/Payment';
import Auth from './pages/Auth/Auth';
import Order from './pages/Orders/Order';
import Cart from './pages/Cart/Cart';
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductsDetail/ProductDetail';

const Routering = () => {
  return (
    <Router basename="/Amazon-clone">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Auth' element={<Auth/>} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routering;

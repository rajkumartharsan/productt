import React from 'react';
import Productmain from './pages/Product_main';
import Seeproduct from './pages/Seeproduct';
import { Order } from './pages/Order'; // Use named import

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Productmain />} />
     <Route path='/Seeproduct' element={<Seeproduct />} />
      <Route path='/order' element={<Order/>} />
    </Routes>
    </BrowserRouter>
    </>
   );
}

export default App;

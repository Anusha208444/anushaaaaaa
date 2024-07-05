import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Allproducts from './pages/Allproducts';
import Cart from './pages/Cart';
import IndDetails from './IndDetails';

import Conditional from './Conditional';


function App() {
  const [cart, setcart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/inddetail' element={<IndDetails/>}/>
      <Route path='/condition' element={<Conditional/>}/>


        <Route path='/allproducts' element={<Allproducts cart={cart} setcart={setcart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import {Routes,Route} from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import Categories from './components/Categories';
//Pages
import Home from './Pages/Home';
import Cart from "./Pages/Cart";
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<>
          <Navbar />
          <Home />
          <Categories />
          </>} />
          <Route path="/cart" element={
            <>
            <Navbar />
            <Cart />
            </>
          }/>
        </Routes>
    </div>
  );
}

export default App;

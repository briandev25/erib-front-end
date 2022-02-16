import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Categories />
    </div>
  );
}

export default App;

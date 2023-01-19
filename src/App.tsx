import React, { useEffect } from 'react';

import './App.css';
import CartContainer from './features/cart/CartContainer';

import NavBar from './features/nav/NavBar';

function App() {
  return (
    <main className="main">
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;

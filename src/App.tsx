import React, { useEffect } from 'react';

import './App.css';
import CartContainer from './features/cart/CartContainer';
import { updateCart } from './features/cart/cartSlice';

import NavBar from './features/nav/NavBar';
import { useAppDispatch } from './hooks/reduxHooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch]);
  return (
    <main className="main">
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;

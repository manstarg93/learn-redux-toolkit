import CartController from './CartController';
import CartItem from './CartItem';
import { CartItemsContainer } from './CartItems.styles';

import myCartItem from '../../cartItems';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { loadCart } from './cartSlice';

const CartItems = () => {
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const loadCartHandler = useCallback(() => {
    dispatch(loadCart(myCartItem));
  }, []);

  useEffect(() => {
    loadCartHandler();
  }, [loadCartHandler]);

  return (
    <CartItemsContainer>
      {isLoading && <h5 className="loading">Loading...</h5>}
      {!isLoading &&
        cartItems.map((data) => <CartItem key={data.id} {...data} />)}
    </CartItemsContainer>
  );
};
export default CartItems;

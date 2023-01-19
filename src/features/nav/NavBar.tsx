import {
  CartAmount,
  CartBasketContainer,
  CartLogo,
  NavBarContainer,
} from './NavBar.styles';
import { IoMdBasket } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { updateCart } from '../cart/cartSlice';
const NavBar = () => {
  const { amount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCart());
  }, []);
  return (
    <NavBarContainer>
      <CartLogo>Redux-Cart</CartLogo>
      <CartBasketContainer>
        <IoMdBasket />
        <CartAmount>{amount}</CartAmount>
      </CartBasketContainer>
    </NavBarContainer>
  );
};
export default NavBar;

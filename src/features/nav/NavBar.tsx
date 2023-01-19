import {
  CartAmount,
  CartBasketContainer,
  CartLogo,
  NavBarContainer,
} from './NavBar.styles';
import { IoMdBasket } from 'react-icons/io';
import { useAppSelector } from '../../hooks/reduxHooks';

const NavBar = () => {
  const { amount } = useAppSelector((state) => state.cart);

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

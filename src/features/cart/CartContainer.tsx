import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import { useAppSelector } from '../../hooks/reduxHooks';
import { CartContainerSection, TotalPrice } from './CartContainer.styles';
import { CartButtonContainer } from './CartController.styled';
import CartItems from './CartItems';
import { addTotalPrice } from './cartSlice';

const CartContainer = () => {
  const total = useAppSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTotalPrice());
  }, []);
  return (
    <CartContainerSection>
      <h4 className="headerCenter">Phones</h4>
      <CartItems />
      <TotalPrice>Total: ${total.toFixed(2)}</TotalPrice>

      <CartButtonContainer>
        <Button color="black">Next</Button>
      </CartButtonContainer>
    </CartContainerSection>
  );
};
export default CartContainer;

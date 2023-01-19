import {
  AvailContainer,
  CartControllerContainer,
  ItemControlContainer,
} from './CartController.styled';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { decreaseAmount, increaseAmount } from './cartSlice';

interface ICartInterface {
  id: string;
  amount: number;
  available: number;
}

const CartController = ({ id, amount, available }: ICartInterface) => {
  const dispatch = useAppDispatch();

  return (
    <CartControllerContainer>
      <AvailContainer avail={available}>
        {' '}
        {available < 10 && 'Only'} {available} Available*
      </AvailContainer>
      <ItemControlContainer>
        <AiOutlineMinus onClick={() => dispatch(decreaseAmount(id))} />
        <span>{amount}</span>
        <AiOutlinePlus onClick={() => dispatch(increaseAmount(id))} />
      </ItemControlContainer>
    </CartControllerContainer>
  );
};
export default CartController;

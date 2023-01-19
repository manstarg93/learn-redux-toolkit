import { IcartItem } from '../../types/IcartItem';

export const updateHelper = (cartItem: IcartItem) => {
  return cartItem
    .map((cart) => cart.amount)
    .reduce((acc, curr) => acc + curr, 0);
};

export const addTotal = (cartItem: IcartItem) => {
  return cartItem
    .map((cart) => {
      return cart.price;
    })
    .reduce((acc, curr) => acc + curr, 0);
};

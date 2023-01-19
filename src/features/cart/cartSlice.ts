import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IcartItem } from '../../types/IcartItem';
import { addTotal, updateHelper } from './reducerHelper';

interface ICartState {
  cartItems: IcartItem | [];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: ICartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state, action: PayloadAction<IcartItem>) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    updateCart: (state) => {
      state.amount = updateHelper(state.cartItems);
    },
    addTotalPrice: (state) => {
      state.total = addTotal(state.cartItems);
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const increasedAmount = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount:
              item.amount < item.available ? item.amount + 1 : item.amount,
            price: (item.price / item.amount) * (item.amount + 1),
          };
        } else return item;
      });
      state.cartItems = increasedAmount;

      state.amount = updateHelper(state.cartItems);
      state.total = addTotal(state.cartItems);
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (item.amount === 1) {
          return item.id !== action.payload;
        } else return item;
      });

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount - 1,
            price: (item.price / item.amount) * (item.amount - 1),
          };
        } else return item;
      });

      state.amount = updateHelper(state.cartItems);
      state.total = addTotal(state.cartItems);
    },
  },
});

export const {
  loadCart,
  updateCart,
  increaseAmount,
  decreaseAmount,
  addTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;

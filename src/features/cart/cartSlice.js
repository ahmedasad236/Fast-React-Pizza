import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32
    }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
    },

    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload
      );
    },

    increaseItemQuantity(state, action) {
      const selectedItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload
      );
      selectedItem.quantity++;
      selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const selectedItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload
      );
      selectedItem.quantity--;
      selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice;
    },
    clearCart(state) {
      state.cartItems = [];
    }
  }
});

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart
} = cartSlice.actions;

export const getCart = (state) => state.cart.cartItems;

export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTotalCartItems = (state) =>
  state.cart.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getQuantityById = (id) => (state) =>
  state.cart.cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;

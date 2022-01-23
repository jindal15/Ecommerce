export const ADD_CART = "cart/ADD_CART";
export const DELETE_CART = "cart/DELETE_CART";
export const ADD_QUANTITY = "cart/ADD_QUANTITY";
export const DECREASE_QUANTITY = "cart/DECREASE_QUANTITY";
export const RESET_CART = "cart/RESET_CART";

const initialState = {
  cart: [],
  total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      if (!state.cart.some((e) => e.id === action.payload.id)) {
        action.payload.quantity = 1;
        state.cart.push(action.payload);
        state.total += Number(action.payload.price);
      }
      return { ...state };
    }
    case DELETE_CART: {
      const updatedCart = state.cart.filter(item =>
        item.id !== action.payload.id
      );
      const updateTotal =
        state.total - Number(action.payload.price) * action.payload.quantity;
      state = {
        ...state,
        cart: updatedCart,
        total: updateTotal
      };
      return state;
    }
    case ADD_QUANTITY: {
      const cartItem = state.cart.find(item =>
        item.id === action.payload
      );
      cartItem.quantity += 1;
      state.total += Number(cartItem.price);
      return { ...state };
    }
    case DECREASE_QUANTITY: {
      const cartItem = state.cart.find((item) => {
        return item.id === action.payload;
      });
      cartItem.quantity -= 1;
      state.total -= Number(cartItem.price);
      return { ...state };
    }
    case RESET_CART: {
      return { cart: [], total: 0 };
    }
    default:
      return state;
  }
};

export const updateCart = (payload) => {
  return {
    type: ADD_CART,
    payload: payload
  };
};
export const removeCart = (payload) => {
  return {
    type: DELETE_CART,
    payload: payload
  };
};
export const incQuantity = (payload) => {
  return {
    type: ADD_QUANTITY,
    payload: payload
  };
};
export const decQuantity = (payload) => {
  return {
    type: DECREASE_QUANTITY,
    payload: payload
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART
  };
}
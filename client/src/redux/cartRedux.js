//selectors
export const getCart = ({ cart }) => cart;
export const getCartById = ({ cart }, id) =>
  cart.find((cart) => cart.id === id);

// actions
const createActionName = (actionName) => `app/product/${actionName}`;
const ADD_CART = createActionName('ADD_CART');

// action creators
export const addCart = (payload) => ({ type: ADD_CART, payload });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const index = statePart.findIndex((cart) => cart.id === action.payload.id);

      if (index === -1) {
        return [...statePart, action.payload];
      } else {
        const updatedCart = statePart.map((cart) => {
          if (cart.id === action.payload.id) {
            return { ...cart, quantity: cart.quantity + 1 };
          } else {
            return cart;
          }
        });
        return updatedCart;
      }
    default:
      return statePart;
  }
};
export default cartReducer;

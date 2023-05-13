import initialState from './initialState';

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

export const getProductById = (state, productId) =>
  state.product.find((product) => product.id === productId);

export const getAllProducts = (state) => state.product;

const productsReducer = (state = initialState.product, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
      default:
        return state;
  }
};

export default productsReducer;

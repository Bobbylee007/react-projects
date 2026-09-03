//setup boilerplate, state: is cuurent state before update, action is what we trying to do
const reducer = (state, action) => {

  // you switch or if statement for reducer function
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    // can also make the cart property value a variable and parse it to cart
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0); // chain with filter method if it goes below zero
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // console.log(price,amount);

        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.amount += amount;
        cartTotal.total += itemTotal
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      },
    );
    total= parseFloat(total.toFixed(2))
    return { ...state, total, amount };
  }
if (action.type === 'LOADING'){
  return {...state, loading: true}
}
//display data
if (action.type==='DISPLAY ITEMS') {
  return {...state, cart:action.payload, loading: false}
  
}
  return state;
};

export default reducer;

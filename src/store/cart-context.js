import React from "react";
// ! The CartContext component is simply a wrapper around the CartContext component
// ! The CreteContext component is used to create a context
// ! The CartContext component manage the cartContext data and provide it to the all the components that need to access it
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

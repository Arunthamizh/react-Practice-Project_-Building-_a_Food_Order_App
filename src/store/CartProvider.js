import React from "react";
import CartContext from "./cart-context";



// * CartProvider components is simply a wrapper around the CartContext component
// * CartProvider manage the cartContext data and provide it to the all the components that need to access it

const CartProvider =  props => {
    const addItemCartHandler =  (item) => {

     }

     const removeItemCartHandler = (id) => {

     }


     const cartContext  = {
        item: [],
        totalAmount: 0,
        AddItem: addItemCartHandler,
        RemoveIte: removeItemCartHandler,
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider
import React from "react";
const CartContext = React.createContext({       //initialize context with some default data
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}      //id to identify the item which is removed from the cart
});

export default CartContext;
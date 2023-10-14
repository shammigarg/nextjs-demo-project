import React from "react"

import CartContext from "./cart-context"

const addItemToCartHAndler = ()=>{};
const removeItemToCartHAndler = ()=>{}


const cartContext = {
    items:[],
    totalAmount:0,
    addItem: addItemToCartHAndler,
    removeItem: removeItemToCartHAndler
}

const CartProvider = props =>{
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;
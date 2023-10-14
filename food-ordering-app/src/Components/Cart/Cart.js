import React, {useState} from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css"

const Cart = (props) => {
    //  const [hideModal, setShowModal] = useState(false)

    //  const hideModalHandler = () => {
    //     if (!hideModal){
    //         setShowModal(true)
    //     }
    //     // setShowModal(prevState => prevState === true ? false : true)
    //  }


    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    }].map((item) => { <li>{item.name}</li> })}</ul>

    return <Modal onClose={props.onHideCart}>
        <div>
            {cartItems}
        </div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>39,99</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
}

export default Cart;
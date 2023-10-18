import React, { useContext, useState, Fragment} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CheckoutForm from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState()
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };



  const checkoutFormHandler = (event) => {
    setIsCheckout(true);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://react-practice-26b5f-default-rtdb.firebaseio.com/orders.json', {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    });
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={checkoutFormHandler}>Order</button>}
  </div>


const cartModalContext = <Fragment>
  {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <CheckoutForm onCancel={props.onClose} onConfirm={submitOrderHandler} />}
      {!isCheckout && modalActions}

</Fragment>


const submitingContext = <Fragment>
  <p>Submitting order data...</p>
</Fragment>

const didSubmitContext = <p>Successfully submit the order!</p>


  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContext}
      {isSubmitting &&  submitingContext}
      {!isSubmitting && didSubmit && didSubmitContext}

    </Modal>
  );
};

export default Cart;

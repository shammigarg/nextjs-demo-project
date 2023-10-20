import classes from './CartButton.module.css';

import {useDispatch} from "react-redux"
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

   const totalQuantity = useSelector( state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleShoppingCartHandler = () => {
 dispatch(uiActions.toggleShoppingCart())}

  return (
    <button className={classes.button} onClick={toggleShoppingCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

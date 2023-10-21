import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-actions';

import { fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.showShoppingCart);

  const notification = useSelector(state => state.ui.notification)

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])


  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending",
    //     message: "Sending cart data..."
    //   }))
    //   const response = await fetch('https://react-practice-26b5f-default-rtdb.firebaseio.com/cart.json', {
    //     method: "PUT",
    //     body: JSON.stringify(cart)
    //   })

    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed...')
    //   }
    //   dispatch(uiActions.showNotification({
    //     status: "success",
    //     title: "Success",
    //     message: "Sent cart data "
    //   }))

    // }

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.isChange) {
      dispatch(sendCartData(cart))
    }



    // sendCartData().catch(error => {
    //   dispatch(uiActions.showNotification({
    //     status: "error",
    //     title: "Error",
    //     message: "Sending cart data failed! "
    //   }))

    // })
  }, [cart, dispatch])

  return (<Fragment>
    {notification && <Notification title={notification.title}
      status={notification.status}
      message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  </Fragment>
  );
}

export default App;

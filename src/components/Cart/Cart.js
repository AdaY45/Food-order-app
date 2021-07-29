import React, { useState } from "react";
import reactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";
import CartButtons from "./CartButtons";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { cartActions } from "../../store/cart-slice";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orders, setOrders] = useState([]);
  const hasCartItems = cartItems.length > 0;
  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + +curr.price * curr.amount;
  }, 0);

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem({ ...item, amount: 1 }));
  };

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const orderAddHandler = order => {
    setOrders((prev) => prev.concat(order));
  };

  const modalStyles = showCheckout ? styles["modal-checkout"] : styles.modal;

  return reactDom.createPortal(
    <div className={styles["modal-background"]}>
      <div className={modalStyles}>
        <div className={styles["modal-content"]}>
          <div className={styles.container}>
            {cartItems.map((el) => (
              <CartItem
                key={el.id}
                cartMeal={el}
                onRemove={removeItemHandler.bind(null, el.id)}
                onAdd={addItemHandler.bind(null, el)}
              />
            ))}
          </div>
          <Total total={Math.floor(totalPrice * 100) / 100} />
          {!showCheckout ? (
            <CartButtons
              hasCartItems={hasCartItems}
              orderHandler={orderHandler}
              showConfirm={showCheckout}
            />
          ) : (
            <CheckoutForm
              hasCartItems={hasCartItems}
              showConfirm={showCheckout}
              onAddOrder={orderAddHandler}
              orderId={orders.length+1}
              setShowCheckout={setShowCheckout}
              onSuccessOrder={props.onSuccessOrder}
            />
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Cart;

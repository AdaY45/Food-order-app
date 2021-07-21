import React, { useContext, useState } from "react";
import reactDom from "react-dom";
import CartItem from "./CartItem";
import Total from "./Total";
import CartButtons from "./CartButtons";
import Button from "../UI/Button/Button";
import CartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";

import styles from "./Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const ctx = useContext(ModalContext);
  const hasCartItems = cartCtx.items.length > 0;
  const totalPrice = cartCtx.items.reduce((acc, curr) => {
    return acc + +curr.price * curr.amount;
  }, 0);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  return reactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles.container}>
          {cartCtx.items.map((el) => (
            <CartItem
              key={el.id}
              cartMeal={el}
              onRemove={removeItemHandler.bind(null, el.id)}
              onAdd={addItemHandler.bind(null, el)}
            />
          ))}
        </div>
        <Total total={Math.floor(totalPrice * 100) / 100} />
        {/* {hasCartItems && <CartButtons />} */}
        {/* <CartButtons /> */}
        <div className={styles.buttons}>
          <div className={styles["buttons-block"]}>
            <Button onClick={ctx.onClose} color="light">
              Close
            </Button>
            {hasCartItems && <Button type="submit">Order</Button>}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Cart;

import React from "react";
import reactDom from "react-dom";
import CartItem from "../Cart/CartItem";
import Total from "./Total";
import CartButtons from "./CartButtons";

import styles from "./Modal.module.css";

const Modal = (props) => {
   const totalPrice = props.cart.reduce((acc, curr) => {
    return (acc + +curr.price*curr.quantity);
   }, 0);

  return reactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        {props.cart.map((el) => (
          <CartItem
            key={el.id}
            cartMeal={el}
            setCart={props.setCart}
          />
        ))}
        <Total total={Math.floor(totalPrice * 100) / 100}/>
        <CartButtons />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;

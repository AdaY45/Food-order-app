import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-block"]}>
        <h3 className={styles.name}>{props.cartMeal.name}</h3>
        <h4 className={styles.price}>${props.cartMeal.price.toFixed(2)}</h4>
      </div>
      <div className={styles["cart-block"]}>
        <h4 className={styles.quantity}>Quantity: {props.cartMeal.amount}</h4>
        <div className={styles["change-quantity"]}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

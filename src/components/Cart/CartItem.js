import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const onAddMeal = () => {
    props.setCart((prev) => {
      prev.forEach((el) => {
        if (el.id === props.cartMeal.id) {
          el.quantity = +el.quantity + 1;
        }
      });
      console.log(prev);
      return prev;
    });
  };

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-block"]}>
        <h3 className={styles.name}>{props.cartMeal.name}</h3>
        <h4 className={styles.price}>${props.cartMeal.price}</h4>
      </div>
      <div className={styles["cart-block"]}>
        <h4 className={styles.quantity}>Quantity: {props.cartMeal.quantity}</h4>
        <div className={styles["change-quantity"]}>
          <button>-</button>
          <button onClick={onAddMeal}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

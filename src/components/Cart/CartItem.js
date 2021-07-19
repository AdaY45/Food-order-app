import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-block"]}>
        <h3 className={styles.name}>{props.name}</h3>
        <h4 className={styles.price}>${props.price}</h4>
      </div>
      <div className={styles["cart-block"]}>
        <h4 className={styles.quantity}>Quantity: {props.quantity}</h4>
        <div className={styles["change-quantity"]}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import CartItem from "../Cart/CartItem";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const closeHandler = () => {
    props.setIsValid(false);
  };

  const total = 0;

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <CartItem
          name={props.name}
          price={props.price}
          quantity={props.quantity}
        />
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <h3 className={styles.price}>${total}</h3>
        </div>
        <div className={styles.buttons}>
          <div className={styles["buttons-block"]}>
            <Button onClick={closeHandler} color="light">Close</Button>
            <Button type="submit">Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";
import Button from "../UI/Button/Button";

import styles from "./CartButtons.module.css";

const CartButtons = (props) => {
  const ctx = useContext(ModalContext);

  return (
    <div className={styles.buttons}>
      <div className={styles["buttons-block"]}>
        <Button onClick={ctx.onClose} color="light">
          Close
        </Button>
        {props.hasCartItems && !props.showConfirm && (
          <Button type="submit" onClick={props.orderHandler}>
            Order
          </Button>
        )}
        {props.showConfirm && (
          <Button formIsValid={props.formIsValid} btnType={props.btnType || ''} type="submit" >
          Confirm
        </Button>
        )}
      </div>
    </div>
  );
};

export default CartButtons;

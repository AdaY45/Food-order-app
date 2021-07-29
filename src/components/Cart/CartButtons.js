import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import { uiActions } from "../../store/ui-slice";

import styles from "./CartButtons.module.css";

const CartButtons = (props) => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.onClose());
  }

  return (
    <div className={styles.buttons}>
      <div className={styles["buttons-block"]}>
        <Button onClick={closeCartHandler} color="light">
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

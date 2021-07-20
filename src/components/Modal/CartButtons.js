import React, {useContext} from "react";
import CartContext, { CartContextProvider } from "../store/cart-context";
import Button from "../Button/Button";

import styles from "./CartButtons.module.css";

const CartButtons = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={styles.buttons}>
      <div className={styles["buttons-block"]}>
        <Button onClick={ctx.onClose} color="light">
          Close
        </Button>
        <Button type="submit">Order</Button>
      </div>
    </div>
  );
};

export default CartButtons;

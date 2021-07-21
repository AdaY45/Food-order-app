import React, {useContext} from "react";
import ModalContext from "../../store/modal-context";
import Button from "../UI/Button/Button";

import styles from "./CartButtons.module.css";

const CartButtons = () => {
  const ctx = useContext(ModalContext);

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

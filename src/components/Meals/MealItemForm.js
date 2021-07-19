import React from "react";
import Button from "../Button/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <React.Fragment>
      <form className={styles["meals-form"]}>
        <div className={styles["form-control"]}>
          <label>Amount</label>
          <input type="number" value={1} />
        </div>
        <Button color="dark">+Add</Button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;

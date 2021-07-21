import React, { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const addMealHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = 1;
  };

  return (
    <React.Fragment>
      <form onSubmit={addMealHandler} className={styles["meals-form"]}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <Button type="submit" color="dark">
          +Add
        </Button>
        {!isValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;

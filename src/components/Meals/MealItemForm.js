import React, { useRef } from "react";
import Button from "../Button/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const addRef = useRef();

  const isInCart = (prev) => {
    for(let el of prev) {
      if (el.name === props.name) {
        return true;
      }
    }

    return false;
  };

  const addMealHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    //addRef.current.active();

    if (+enteredAmount < 0) {
      //Error
    }

    props.setCart((prevCart) => {
      if (prevCart.length === 0 || !isInCart(prevCart)) {
        return [
          ...prevCart,
          {
            id: Math.random().toString(),
            name: props.name,
            price: props.price,
            quantity: enteredAmount,
          },
        ];
      } else {
        prevCart.forEach((el) => {
          if (el.name === props.name) {
            el.quantity = +el.quantity + +enteredAmount;
          }
        });
        return prevCart;
      }
    });
    amountInputRef.current.value = 1;
  };

  return (
    <React.Fragment>
      <form onSubmit={addMealHandler} className={styles["meals-form"]}>
        <div className={styles["form-control"]}>
          <label>Amount</label>
          <input ref={amountInputRef} type="number" defaultValue={1} />
        </div>
        <Button ref={addRef} type="submit" color="dark">
          +Add
        </Button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;

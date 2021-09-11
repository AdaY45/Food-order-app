import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MealItemForm from "./MealItemForm";
import { cartActions } from "../../store/cart-slice";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const dispatch = useDispatch();
  
  const addItemToCartHandler = (amount) => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };

  return (
    <div className={styles["meal-item"]}>
      <div className={styles["meal-info"]}>
        <h4 className={styles.name}>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
        <h3 className={styles.price}>${props.price}</h3>
      </div>
      <MealItemForm
        onAddToCart={addItemToCartHandler}
        id={props.id}
        name={props.name}
        price={props.price}
      />
    </div>
  );
};

export default MealItem;

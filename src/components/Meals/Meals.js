import React from "react";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={styles.meals}>
      {props.meals.map((el) => (
        <MealItem
          key={el.id}
          name={el.name}
          description={el.description}
          price={el.price}
          cart={props.cart}
          setCart={props.setCart}
        />
      ))}
    </div>
  );
};

export default Meals;

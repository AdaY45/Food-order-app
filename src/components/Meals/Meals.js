import React from "react";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={styles.meals}>
      {props.meals.map((el) => (
        <MealItem
          key={el.id}
          id={el.id}
          name={el.name}
          description={el.description}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default Meals;

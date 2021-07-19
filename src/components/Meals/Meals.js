import React from "react";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={styles.meals}>
      <MealItem name="Sushi" description="dfgdfgdgfd" price="$34.22" />
      <MealItem name="Sushi" description="dfgdfgdgfd" price="$34.22" />
      <MealItem name="Sushi" description="dfgdfgdgfd" price="$34.22" />
    </div>
  );
};

export default Meals;

import React from "react";
import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

const MealItem = props => {
    return (
        <div className={styles["meal-item"]}>
            <div className={styles["meal-info"]}>
                <h4 className={styles.name}>{props.name}</h4>
                <p className={styles.description}>{props.description}</p>
                <h3 className={styles.price}>${props.price}</h3>
            </div>
            <MealItemForm name={props.name} price={props.price} setCart={props.setCart}/>
        </div>
    );
};

export default MealItem;
import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

import styles from "./MealItem.module.css";

const MealItem = props => {
    const ctx = useContext(CartContext);
    const addItemToCartHandler = amount => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <div className={styles["meal-item"]}>
            <div className={styles["meal-info"]}>
                <h4 className={styles.name}>{props.name}</h4>
                <p className={styles.description}>{props.description}</p>
                <h3 className={styles.price}>${props.price}</h3>
            </div>
            <MealItemForm onAddToCart={addItemToCartHandler} id={props.id} name={props.name} price={props.price}/>
        </div>
    );
};

export default MealItem;
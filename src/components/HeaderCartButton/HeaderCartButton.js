import React from 'react';
import CartIcon from './CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartHandler = () => {
        props.setIsValid(true);
    };

    return (
        <button onClick={cartHandler} className={styles["header-btn"]}>
            <CartIcon className={styles.icon}/>
            <div className={styles["button-name"]}>Your Cart</div>
            <div className={styles.quantity}>{props.quantity}</div>
        </button>
    );
};

export default HeaderCartButton;
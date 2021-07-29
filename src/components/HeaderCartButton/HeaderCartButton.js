import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon';
import { uiActions } from '../../store/ui-slice';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    const dispatch = useDispatch();
    const [btnIsSet, setBtnIsSet] = useState(false);

    const items = useSelector(state => state.cart.items);
    console.log(items);

    const itemsNumberInCart = items.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);

    const btnStyles = `${styles["header-btn"]} ${btnIsSet ? styles.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsSet(true);

        const timer = setTimeout(() => {
            setBtnIsSet(false);
        }, 300); 

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const openCartHandler = () => {
        dispatch(uiActions.onOpen());
    };

    return (
        <button onClick={openCartHandler} className={btnStyles}>
            <CartIcon className={styles.icon}/>
            <div className={styles["button-name"]}>Your Cart</div>
            <div className={styles.quantity}>{itemsNumberInCart || 0}</div>
        </button>
    );
};

export default HeaderCartButton;
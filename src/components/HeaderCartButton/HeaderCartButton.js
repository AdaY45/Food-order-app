import React, { useContext, useEffect, useState} from 'react';
import ModalContext from '../../store/modal-context';
import CartContext from "../../store/cart-context";
import CartIcon from './CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = React.forwardRef((props,ref) => {
    const ctx = useContext(ModalContext);
    const cartCtx = useContext(CartContext);
    const [btnIsSet, setBtnIsSet] = useState(false);

    const { items } = cartCtx;

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

    return (
        <button onClick={ctx.onOpen} className={btnStyles}>
            <CartIcon className={styles.icon}/>
            <div className={styles["button-name"]}>Your Cart</div>
            <div className={styles.quantity}>{itemsNumberInCart || 0}</div>
        </button>
    );
});

export default HeaderCartButton;
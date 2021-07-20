import React, { useContext, useRef, useImperativeHandle} from 'react';
import CartContext from '../store/cart-context';
import CartIcon from './CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = React.forwardRef((props,ref) => {
    const cartButton = useRef();

    const activate = () => {
        cartButton.current.active();
    }

    useImperativeHandle(ref, () => {
        return {
            active: activate
        };
    });

    const ctx = useContext(CartContext);

    return (
        <button ref={cartButton} onClick={ctx.onOpen} className={styles["header-btn"]}>
            <CartIcon className={styles.icon}/>
            <div className={styles["button-name"]}>Your Cart</div>
            <div className={styles.quantity}>{props.quantity || 0}</div>
        </button>
    );
});

export default HeaderCartButton;
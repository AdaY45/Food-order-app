import React from 'react';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import styles from './MainHeader.module.css';

const MainHeader = props => {
    return (
        <header>
            <h2 className={styles['app-name']}>ReactMeals</h2>
            <HeaderCartButton quantity={props.cart.length}/>
        </header>
    );
};

export default MainHeader;
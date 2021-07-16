import React from 'react';

import styles from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header>
            <div className={styles['app-name']}>ReactMeals</div>
        </header>
    );
};

export default MainHeader;
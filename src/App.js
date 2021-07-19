import React, {useState} from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Meals from './components/Meals/Meals';
import Modal from './components/Modal/Modal';

import styles from './App.module.css';

function App() {
  const [isValid, setIsValid] = useState(false);

  return (
    <React.Fragment>
      {isValid && <Modal setIsValid={setIsValid} name="Sushi" price={343} quantity={1}/>}
      <MainHeader setIsValid={setIsValid}/>
      <div className={styles["hero-section"]}>
        <div className={styles["text-block"]}>
            <h2 className={styles["text-header"]}>Best restaurant in the city</h2>
            <p className={styles["text-p"]}>Choose your favourite meal from our menu and enjoy delicious lunch or dinner at home</p>
        </div>
      </div>
      <Meals/>
    </React.Fragment>
  );
}

export default App;

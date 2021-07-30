import { Fragment } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <Fragment>
      <div className={styles.contacts}>
        <ul>
          <li>Email: tasteful@ukr.net</li>
          <li>Phone number: 0956434123</li>
          <li>Address: Rivne, Solomii Krushelnitskoi 54</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Contacts;

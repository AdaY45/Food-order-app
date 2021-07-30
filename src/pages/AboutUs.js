import { Fragment } from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Fragment>
      <div className={styles["about-us"]}>
        <div className={styles.img}></div>
        <div className={styles.text}>
          <h2>About us</h2>
          <p>
            Tasteful is the app that allows you to get the best products of your
            city in a few minutes. We connect users, businesses and couriers to
            make that possible. The project was born with the aim of
            transforming the way users acquire what they need, making cities
            more accessible. At Tasteful we want to give everyone easy access to
            anything in their city, having a sustainable impact on the economy,
            society and environment: we are a tech-first responsible company.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;

import styles from "./Total.module.css";

const Total = (props) => {
  return (
    <div className={styles.total}>
      <h3>Total Amount</h3>
      <h3 className={styles.price}>${props.total}</h3>
    </div>
  );
};

export default Total;

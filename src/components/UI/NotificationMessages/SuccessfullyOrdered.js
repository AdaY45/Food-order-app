import ReactDOM from "react-dom";
import Button from "../Button/Button";
import styles from "./SuccessfullyOrdered.module.css";

const SuccessfullyOrdered = (props) => {
    const onCloseSuccess = () => {
        props.setIsSuccessfullyOrdered(false);
    };

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.success}>
        <p>Successfully ordered!</p>
        <Button onClick={onCloseSuccess} color="light">
          Close
        </Button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default SuccessfullyOrdered;

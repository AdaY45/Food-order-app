import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles.button + " " + styles[props.color]}
      onClick={props.onClick}
      disabled={!props.formIsValid && props.btnType === 'confirm'}
    >
      {props.children}
    </button>
  );
};

export default Button;

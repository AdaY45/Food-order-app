import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={styles["form-control"]}>
          <label htmlFor={props.input.id}>{props.label}</label>
          <input ref={ref} {...props.input} className={props.className ? styles[props.className] : ''}/>
        </div>
    );
});

export default Input;
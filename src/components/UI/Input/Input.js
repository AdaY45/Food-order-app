import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={styles["form-control"]}>
          <label htmlFor={props.input.id}>{props.label}</label>
          <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
import styles from "./Loader.module.css";

const Loader = (props) => {
    return <div className={styles.loader}>{props.children}</div>;
};

export default Loader;
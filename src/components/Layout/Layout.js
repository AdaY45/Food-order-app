import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Layout.module.css";
import MainHeader from "../MainHeader/MainHeader";
import Modal from "../Cart/Cart";
import SuccessfullyOrdered from "../UI/NotificationMessages/SuccessfullyOrdered";

const Layout = (props) => {
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);
  const [isSuccessfullyOrdered, setIsSuccessfullyOrdered] = useState(false);

  return (
    <Fragment>
      {isModalOpen && <Modal onSuccessOrder={setIsSuccessfullyOrdered} />}
      {isSuccessfullyOrdered && (
        <SuccessfullyOrdered
          setIsSuccessfullyOrdered={setIsSuccessfullyOrdered}
        />
      )}
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

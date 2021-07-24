import React, { useRef, useContext } from "react";
import CartButtons from "../Cart/CartButtons";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader/Loader";
import CartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";

import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);
  const payment = useRef();
  const { isLoading, error, sendRequest: sendOrderRequest } = useHttp();

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: address,
    isValid: addressIsValid,
    hasErrors: addressHasErrors,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && addressIsValid) {
    formIsValid = true;
  }

  const createOrder = (firstName, lastName, address, payment) => {
    const id = "o" + props.orderId;
    const createdOrder = { id, firstName, lastName, address, payment };

    props.onAddOrder(createdOrder);
  };

  const onCheckoutSubmit = (event) => {
    event.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid && !addressIsValid) {
      return;
    }

    const pay = payment.current.value;

    sendOrderRequest(
      {
        url: "https://react-http-e03c3-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { firstName, lastName, address, pay },
      },
      createOrder(firstName, lastName, address, pay)
    );

    cartCtx.removeAllItems();
    props.setShowCheckout(false);
    modalCtx.onClose();
    props.onSuccessOrder(true);
  };

  const firstNameInputStyles = firstNameHasErrors ? "invalid" : "";

  const lastNameInputStyles = lastNameHasErrors ? "invalid" : "";

  const addressInputStyles = addressHasErrors ? "invalid" : "";

  return (
    <div className={styles.background}>
      {isLoading && <Loader />}
      <form onSubmit={onCheckoutSubmit} className={styles["checkout-form"]}>
        <div className={styles[firstNameInputStyles]}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasErrors && (
            <p className={styles.error}>First Name shound not be empty</p>
          )}
        </div>

        <div className={styles[lastNameInputStyles]}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasErrors && (
            <p className={styles.error}>Last Name shound not be empty</p>
          )}
        </div>

        <div className={styles[addressInputStyles]}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={address}
          />
          {addressHasErrors && (
            <p className={styles.error}>Address shound not be empty</p>
          )}
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="name">Payment method</label>
          <select name="pay" ref={payment}>
            <option defaultValue value="Cash">
              Cash
            </option>
            <option value="Credit card">Credit card</option>
          </select>
        </div>
        <CartButtons
          showConfirm={props.showConfirm}
          hasCartItems={props.hasCartItems}
          formIsValid={formIsValid}
          btnType="confirm"
        />
      </form>
    </div>
  );
};

export default CheckoutForm;

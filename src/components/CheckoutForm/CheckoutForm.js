import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartButtons from "../Cart/CartButtons";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader/Loader";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const payment = useRef();
  const { isLoading, error, sendRequest: sendOrderRequest } = useHttp();

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: address,
    isValid: addressIsValid,
    hasErrors: addressHasErrors,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
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
        body: { firstName, lastName, address, paymentMethod: pay, order: cartItems },
      },
      createOrder(firstName, lastName, address, pay, cartItems)
    );

    if (error === null) {
      dispatch(cartActions.removeAllItems());
      props.setShowCheckout(false);
      dispatch(uiActions.onClose());
      props.onSuccessOrder(true);
    }
  };

  const firstNameInputStyles = firstNameHasErrors ? "invalid" : "";

  const lastNameInputStyles = lastNameHasErrors ? "invalid" : "";

  const addressInputStyles = addressHasErrors ? "invalid" : "";

  return (
    <div className={styles.background}>
      <h2 className={styles["checkout-header"]}>Checkout</h2>
      {isLoading && <Loader />}
      {error && <p className="error-message checkout">{error}</p>}
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

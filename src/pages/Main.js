import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Meals from "../components/Meals/Meals";
import HeroSection from "../components/HeroSection/HeroSection";
import useHttp from "../hooks/use-http";
import Loader from "../components/UI/Loader/Loader";
import { cartActions } from "../store/cart-slice";

import "./Main.css";

let isInitial = true;

function Main() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  const { sendRequest: fetchCart } = useHttp();
  const { sendRequest: sendCart } = useHttp();
  const [mealsList, setMealsList] = useState([]);
  let componentMounted = true;

  useEffect(() => {
    const setMeals = (meals) => {
      const loadedMeals = [];

      for (const meal in meals) {
        loadedMeals.push({
          id: meal,
          name: meals[meal].name,
          description: meals[meal].description,
          price: meals[meal].price,
        });
      }

      setMealsList(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-e03c3-default-rtdb.firebaseio.com/meals.json",
      },
      setMeals,
      componentMounted
    );
    return () => {
      componentMounted = false;
    }
  }, [fetchMeals]);

  useEffect(() => {
    const setCart = (data) => {
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalAmount: data.totalAmount,
        })
      );
    };

    fetchCart(
      {
        url: "https://react-http-e03c3-default-rtdb.firebaseio.com/cart.json",
      },
      setCart
    );
  }, [fetchCart, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      sendCart(
        {
          url: "https://react-http-e03c3-default-rtdb.firebaseio.com/cart.json",
          method: "PUT",
          body: {
            items: cart.items,
            totalAmount: cart.totalAmount,
          },
          headers: {
            "Content-Type": "application/json",
          },
        },
        function (data) {
          return undefined;
        }
      );
    }
  }, [cart, sendCart]);

  return (
    <Fragment>
      <HeroSection />
      {error ? (
        <p className="error-message meals">{error}</p>
      ) : (
        <Meals meals={mealsList} />
      )}
      {isLoading && <Loader />}
    </Fragment>
  );
}

export default Main;

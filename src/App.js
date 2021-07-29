import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainHeader from "./components/MainHeader/MainHeader";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Cart/Cart";
import HeroSection from "./components/HeroSection/HeroSection";
import useHttp from "./hooks/use-http";
import Loader from "./components/UI/Loader/Loader";

import "./App.css";
import SuccessfullyOrdered from "./components/UI/NotificationMessages/SuccessfullyOrdered";
import { Fragment } from "react";

function App() {
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  const [mealsList, setMealsList] = useState([]);
  const [isSuccessfullyOrdered, setIsSuccessfullyOrdered] = useState(false);

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
      setMeals
    );
  }, [fetchMeals]);

  return (
    <Fragment>
      {isModalOpen && <Modal onSuccessOrder={setIsSuccessfullyOrdered} />}
      <MainHeader />
      <main>
        {isLoading && <Loader />}
        {isSuccessfullyOrdered && (
          <SuccessfullyOrdered
            setIsSuccessfullyOrdered={setIsSuccessfullyOrdered}
          />
        )}
        <HeroSection />
        {error ? (
          <p className="error-message meals">{error}</p>
        ) : (
          <Meals meals={mealsList} />
        )}
      </main>
    </Fragment>
  );
}

export default App;

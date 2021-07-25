import React, { useState, useContext, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Cart/Cart";
import ModalContext from "./store/modal-context";
import HeroSection from "./components/HeroSection/HeroSection";
import CartContextProvider from "./store/CartContextProvider";
import useHttp from "./hooks/use-http";
import Loader from "./components/UI/Loader/Loader";

import "./App.css";
import SuccessfullyOrdered from "./components/UI/NotificationMessages/SuccessfullyOrdered";

function App() {
  const ctx = useContext(ModalContext);
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
  }, []);

  return (
    <CartContextProvider>
      {/* better to do with props */}
      {ctx.isModal && <Modal onSuccessOrder={setIsSuccessfullyOrdered} />}
      <MainHeader />
      <main>
        {isLoading && <Loader/>}
        {isSuccessfullyOrdered && (
          <SuccessfullyOrdered
            setIsSuccessfullyOrdered={setIsSuccessfullyOrdered}
          />
        )}
        <HeroSection />
        {error ? <p className="error-message meals">{error}</p> : <Meals meals={mealsList} />}
      </main>
    </CartContextProvider>
  );
}

export default App;

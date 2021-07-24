import React, { useState, useContext, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Cart/Cart";
import ModalContext from "./store/modal-context";
import HeroSection from "./components/HeroSection/HeroSection";
import CartContextProvider from "./store/CartContextProvider";
import useHttp from "./hooks/use-http";

import "./App.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

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
      {/* better do with props */}
      {ctx.isModal && <Modal onSuccessOrder={setIsSuccessfullyOrdered} />}
      <MainHeader />
      <main>
        {isSuccessfullyOrdered && (
          <div className="success">
            <p>Successfully ordered!</p>
          </div>
        )}
        <HeroSection />
        <Meals meals={mealsList} />
      </main>
    </CartContextProvider>
  );
}

export default App;

import React, { useState, useContext } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Cart/Cart";
import ModalContext from "./store/modal-context";
import HeroSection from "./components/HeroSection/HeroSection";
import CartContextProvider from "./store/CartContextProvider";

import "./App.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const ctx = useContext(ModalContext);
  const mealsList = DUMMY_MEALS;
  return (
    <CartContextProvider>
      {/* better do with props */}
      {ctx.isModal &&
          <Modal />}
      <MainHeader />
      <main>
        <HeroSection />
        <Meals meals={mealsList} />
      </main>
    </CartContextProvider>
  );
}

export default App;

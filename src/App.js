import React, { useState, useContext } from "react";
import reactDom from "react-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import CartContext from "./components/store/cart-context";
import HeroSection from "./HeroSection/HeroSection";

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
  const ctx = useContext(CartContext);
  const [mealsList, setMealsList] = useState(DUMMY_MEALS);
  const [cart, setCart] = useState([]);

  console.log(cart);

  return (
    <React.Fragment>
      {ctx.isModal &&
        reactDom.createPortal(
          <Modal
            cart={cart}
            setCart={setCart}
          />,
          document.getElementById("modal")
        )}
      <MainHeader cart={cart}/>
      <HeroSection/>
      <Meals meals={mealsList} cart={cart} setCart={setCart} />
    </React.Fragment>
  );
}

export default App;

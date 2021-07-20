import React, { useState } from "react";

const CartContext = React.createContext({
  isModal: false,
  onOpen: () => {},
  onClose: () => {},
});

export const CartContextProvider = (props) => {
  const [isModal, setIsModal] = useState(false);

  const openHandler = () => {
    setIsModal(true);
  };

  const closeHandler = () => {
    setIsModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        isModal: isModal,
        onOpen: openHandler,
        onClose: closeHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

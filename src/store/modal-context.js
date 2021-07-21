import React, { useState } from "react";

const ModalContext = React.createContext({
  isModal: false,
  onOpen: () => {},
  onClose: () => {},
});

export const ModalContextProvider = (props) => {
  const [isModal, setIsModal] = useState(false);

  const openHandler = () => {
    setIsModal(true);
  };

  const closeHandler = () => {
    setIsModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModal: isModal,
        onOpen: openHandler,
        onClose: closeHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobDisplay, setMobDisplay] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const mobHandler = () => {
    setMobDisplay(!mobDisplay);
  };
  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        mobDisplay,
        setMobDisplay,
        mobHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

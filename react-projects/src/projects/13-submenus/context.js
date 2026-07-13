import React, { useState, useContext } from "react";
import sublinks from "./data";

const Appcontext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSiderbarOpen, setIsSiderbarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSiderbarOpen(true);
  };
  const closeSidebar = () => {
    setIsSiderbarOpen(false);
  };

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <Appcontext.Provider
      value={{
        isSubmenuOpen,
        isSiderbarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
export const useGlobalContext = () => {
    return useContext(Appcontext)
}


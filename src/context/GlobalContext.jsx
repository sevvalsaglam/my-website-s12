/* eslint-disable react/prop-types */
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};
import { createContext } from "react";

export const Context = createContext();

// component

const AppContext = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default AppContext;

import { createContext } from "react";

export const GloablContext = createContext();

export const GloablContextProvider = ({ children }) => {
  return (
    <GloablContext.Provider value={{ counter: 0 }}>
      {children}
    </GloablContext.Provider>
  );
};

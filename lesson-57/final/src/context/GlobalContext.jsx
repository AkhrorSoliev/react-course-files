import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return { counter: state.counter + payload };
    case "DECREMENT":
      return { counter: state.counter - payload };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    counter: 0,
  });

  const increment = (amount) => {
    dispatch({ type: "INCREMENT", payload: amount });
  };

  const decrement = (amount) => {
    dispatch({ type: "DECREMENT", payload: amount });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, increment, decrement, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";

let initialState = {
  transtations: [],
};

let reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        transtations: state.transtations.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "ADD":
      return {
        ...state,
        transtations: [...state.transtations, action.payload],
      };

    default:
      return state;
  }
};

let GlobalContext = createContext(initialState);

export const GlobolProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function remove(id) {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  }
  function add(transactions) {
    dispatch({
      type: "ADD",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider value={{ task: state.transtations, remove, add }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

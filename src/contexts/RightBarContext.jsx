import React from "react";

const initialState = {
  type: "",
  isOpen: false,
};

function reducers(state, action) {
  switch (action.type) {
    case "open_lowongan":
      return { type: action.payload, isOpen: true };
    case "close_lowongan":
      return { type: action.payload, isOpen: false };
    case "open_pelamar":
      return { type: action.payload, isOpen: true };
    case "close_pelamar":
      return { type: action.payload, isOpen: false };
    case "open_pelamar-cabang":
      return { type: action.payload, isOpen: true };
    case "close_pelamar-cabang":
      return { type: action.payload, isOpen: false };
    default:
      break;
  }
}

export const RightBarContext = React.createContext();

function RightBarProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducers, initialState);

  const value = {
    type: state.type,
    isOpen: state.isOpen,
    toggleNav: (typeNav, payloadNav) => {
      dispatch({ type: typeNav, payload: payloadNav });
    },
  };

  return (
    <RightBarContext.Provider value={value}>
      {children}
    </RightBarContext.Provider>
  );
}

export default RightBarProvider;

import { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    // case "LOGOUT":
    //   return { ...state, user: null };
    case "IS_AUTH_CHANGE":
      return { ...state, isAuthReady: true };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    isAuthReady: false,
  });
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

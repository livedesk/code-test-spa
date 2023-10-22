import React, { createContext, useState } from "react";

// Create a new context
const AppContext = createContext();

// Create a Provider component
const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    user: "",
    token: "",
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

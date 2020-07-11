import React, { createContext, useState } from "react";
import { AppContext } from "../types/types";

const Context = createContext<AppContext>({});

const Provider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const value: AppContext = {
    darkTheme,
    toggleTheme
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";

const dark = true;
const theme = {
  dark: {
    main: "#021D46",
    text: "#f8f8f8",
    secondary: "#FF3E55"
  },
  light: {
    main: "#ffffff",
    text: "#021D46",
    secondary: "#212121"
  }
};

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;

import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { Container } from "./LayoutStyles";
import Header from "../Header/Header";
import { Context } from "../../context/context";
import { Colors } from "../../types/types";

const dark: Colors = {
  main: "#021D46",
  text: "#f8f8f8",
  secondary: "#FF3E55"
};

const light: Colors = {
  main: "#E5E8EF",
  text: "#021D46",
  secondary: "#212121"
};

const Layout: React.FC = ({ children }) => {
  const { darkTheme } = useContext(Context);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

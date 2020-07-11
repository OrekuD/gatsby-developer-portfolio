import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { Container } from "./LayoutStyles";
import Header from "../Header/Header";
import { Context } from "../../context/context";
import { dark, light } from "../../constants/Colors";
import Sidebar from "../Sidebar/Sidebar";

const Layout: React.FC = ({ children }) => {
  const { darkTheme } = useContext(Context);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

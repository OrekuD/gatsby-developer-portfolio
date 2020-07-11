import React, { useContext } from "react";
import { Container, Title, Item, Items, ThemeButton } from "./HeaderStyles";
import { MenuItems } from "../../constants/MenuItems";
import { Link } from "gatsby";
import { Context } from "../../context/context";

const variant = {
  initial: { y: 5, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const Header: React.FC = () => {
  const { toggleTheme } = useContext(Context);
  return (
    <Container>
      <Link to="/">
        <Title variants={variant} animate="animate" initial="initial">
          Opoku
        </Title>
      </Link>
      <Items>
        {MenuItems.map(({ name, path, id }) => (
          <Link to={path}>
            <Item
              variants={variant}
              animate="animate"
              initial="initial"
              id={id}
            >
              {name}
            </Item>
          </Link>
        ))}
        <ThemeButton
          onClick={toggleTheme}
          variants={variant}
          animate="animate"
          initial="initial"
        >
          Chale
        </ThemeButton>
      </Items>
    </Container>
  );
};

export default Header;

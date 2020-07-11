import React, { useContext } from "react";
import { Container, Title, Icons, Icon, VerticalLine } from "./SidebarStyles";
import { Github, TwitterOutline, Twitter, LinkedIn } from "../../svg/Svgs";
import { Context } from "../../context/context";
import { dark, light } from "../../constants/Colors";

const iconsContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const icon = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, type: "tween" }
  }
};

const Sidebar: React.FC = () => {
  const { darkTheme } = useContext(Context);
  return (
    <Container>
      <Title>
        <p> Let's connect </p>
      </Title>
      <VerticalLine />
      <Icons variants={iconsContainer} initial="initial" animate="animate">
        <Icon variants={icon}>
          <Github size="24px" color={darkTheme ? dark.text : light.text} />
        </Icon>
        <Icon variants={icon}>
          <Twitter size="28px" color={darkTheme ? dark.text : light.text} />
        </Icon>
        <Icon variants={icon}>
          <LinkedIn
            size="24px"
            color={darkTheme ? dark.text : light.text}
            bgColor={darkTheme ? dark.main : light.main}
          />
        </Icon>
        <Icon variants={icon}>
          <Github size="24px" color={darkTheme ? dark.text : light.text} />
        </Icon>
      </Icons>
    </Container>
  );
};

export default Sidebar;

import React, { useContext } from "react";
import { Container, Title } from "./FeaturedProjectsStyles";
import { Context } from "../../context/context";

const container = {
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

const variant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, type: "tween" }
  }
};

const FeturedProjects: React.FC = () => {
  const { darkTheme } = useContext(Context);

  return (
    <Container variants={container} initial="initial" animate="animate">
      <Title variants={variant}>Featured projects</Title>
    </Container>
  );
};

export default FeturedProjects;

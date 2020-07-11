import React from "react";
import { Container } from "./FeaturedProjectsStyles";
import {
  Title,
  HorizontalLine,
  TitleContainer
} from "../../styles/GlobalStyles";
import { projects } from "../../data/projects";
import Projects from "../Projects/Projects";

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
  //   const { darkTheme } = useContext(Context);

  return (
    <Container variants={container} initial="initial" animate="animate">
      <TitleContainer>
        <Title variants={variant}>Featured projects</Title>
        <HorizontalLine />
      </TitleContainer>
      <Projects data={projects.filter(project => project.featured)} />
    </Container>
  );
};

export default FeturedProjects;

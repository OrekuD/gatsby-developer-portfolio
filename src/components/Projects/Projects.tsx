import React from "react";
import { Container, Item } from "./ProjectsStyles";
import { ProjectProps } from "../../types/types";
import ProjectCard from "../ProjectCard/ProjectCard";

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

interface Props {
  data: Array<ProjectProps>;
}

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <Container variants={container} initial="initial" animate="animate">
      {data.map((item, index) => (
        <Item variants={variant}>
          <ProjectCard data={item} key={index} index={index} />
        </Item>
      ))}
    </Container>
  );
};

export default Projects;

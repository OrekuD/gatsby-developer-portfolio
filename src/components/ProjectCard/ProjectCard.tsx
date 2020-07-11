import React from "react";
import {
  Container,
  ProjectDetails,
  ProjectImage,
  ProjectDescription,
  ProjectName,
  Stack,
  Badge
} from "./ProjectCardStyles";
import { ProjectProps } from "../../types/types";

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
  data: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ data, index }) => {
  //   const { darkTheme } = useContext(Context);
  const { name, description, stack, github, url } = data;

  return (
    <Container
      // variants={container}
      // initial="initial"
      // animate="animate"
      left={index % 2 === 0}
    >
      <ProjectDetails>
        <div>
          <ProjectName>{name}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
        </div>
        <Stack>
          {stack.map(({ id, name }) => (
            <Badge key={id}>
              <p> {name} </p>
            </Badge>
          ))}
        </Stack>
      </ProjectDetails>
      <ProjectImage></ProjectImage>
    </Container>
  );
};

export default ProjectCard;

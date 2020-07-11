import React from "react";
import { motion } from "framer-motion";
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

interface Props {
  data: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ data, index }) => {
  //   const { darkTheme } = useContext(Context);
  const { name, description, stack, github, url, image } = data;

  return (
    <Container left={index % 2 === 0}>
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
      <ProjectImage>
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
          src={image}
          alt="Project"
        />
      </ProjectImage>
    </Container>
  );
};

export default ProjectCard;

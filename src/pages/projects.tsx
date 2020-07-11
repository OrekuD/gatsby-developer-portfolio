import React from "react";
import { Layout, Projects } from "../components";
import { projects } from "../data/projects";
import { Title, HorizontalLine, TitleContainer } from "../styles/GlobalStyles";

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <TitleContainer>
        <HorizontalLine />
        <Title marginLeft>All projects</Title>
      </TitleContainer>
      <Projects data={projects} />
    </Layout>
  );
};

export default ProjectsPage;

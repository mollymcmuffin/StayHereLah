import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FeaturedProject from "./FeaturedProject";

const Container = styled.div`
  background-color: white;
  height: 100%;
  flex: 1;
  border: none;
  border-color: red;
`;

const FeatureTitle = styled.h1`
  margin: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  border: none;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Featured = ({ featuredProjects }) => {
  const category = "mature";
  const projectsArr = [...featuredProjects[category]["01Project_Name"]];

  return (
    <Container>
      <FeatureTitle>Matured projects</FeatureTitle>
      <Wrapper>
        {projectsArr.map((project) => (
          <FeaturedProject
            project={project}
            id={projectsArr.indexOf(project)}
            category={category}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Featured;

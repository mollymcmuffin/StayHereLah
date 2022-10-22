import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  border: solid;
  background-color: #f6416c;
  border-color: red;
  height: 80%;
  width: 40vw;
  overflow: auto;
  margin-top: 5rem;
  border-radius: 10px;
`;

const Project = styled.div`
  border: solid;
  border-radius: 10px;
  background-color: #ffde7d;
  border-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 1.5rem;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const AllProjects = ({ data }) => {
  const nonmature = [...data["nonmature"]["01Project_Name"]];
  const mature = [...data["mature"]["01Project_Name"]];
  return (
    <Container>
      <ProjectContainer>
        {nonmature.map((project) => (
          <Project>
            <ProjectLink to={`/bto/nonmature/${nonmature.indexOf(project)}`}>
              {project}
            </ProjectLink>
          </Project>
        ))}
        {mature.map((project) => (
          <Project>
            <ProjectLink to={`/bto/mature/${mature.indexOf(project)}`}>
              {project}
            </ProjectLink>
          </Project>
        ))}
      </ProjectContainer>
    </Container>
  );
};

export default AllProjects;

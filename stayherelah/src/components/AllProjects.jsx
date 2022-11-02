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
  background-color: #f6416c;
  height: 80%;
  width: 40vw;
  overflow: auto;
  margin-top: 5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Project = styled.div`
  border-radius: 10px;
  background-color: #ffde7d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: black;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const MaturityBox = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1rem;
`;

const MaturityTitle = styled.h3`
  text-align: center;
`;

const AllProjects = ({ data }) => {
  const nonmature = [...data["nonmature"]["01Project_Name"]];
  const mature = [...data["mature"]["01Project_Name"]];
  return (
    <Container>
      <ProjectContainer>
        <MaturityBox>
          <MaturityTitle>Non-Mature Projects</MaturityTitle>
          <div>
            {nonmature.map((project) => (
              <ProjectLink
                to={`/btoprojects/nonmature/${nonmature.indexOf(project)}`}
              >
                <Project>{project}</Project>
              </ProjectLink>
            ))}
          </div>
        </MaturityBox>
        <MaturityBox>
          <MaturityTitle>Mature Projects</MaturityTitle>
          <div>
            {mature.map((project) => (
              <ProjectLink
                to={`/btoprojects/mature/${mature.indexOf(project)}`}
              >
                <Project>{project}</Project>
              </ProjectLink>
            ))}
          </div>
        </MaturityBox>
      </ProjectContainer>
    </Container>
  );
};

export default AllProjects;

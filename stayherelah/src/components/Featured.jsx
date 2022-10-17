import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Project = styled.div`
  height: 80%;
  border: none;
  width: 20vw;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ffe7cc;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h2``;

const Featured = () => {
  return (
    <Container>
      <FeatureTitle>Featured projects</FeatureTitle>
      <Wrapper>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Bishan</Title>
          </ProjectLink>
        </Project>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Woodlands</Title>
          </ProjectLink>
        </Project>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Tengah</Title>
          </ProjectLink>
        </Project>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Keppel</Title>
          </ProjectLink>
        </Project>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Yishun</Title>
          </ProjectLink>
        </Project>
        <Project>
          <ProjectLink to={`/btoprojects`}>
            <Title>Changi</Title>
          </ProjectLink>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Featured;

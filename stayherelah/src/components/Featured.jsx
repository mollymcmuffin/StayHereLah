import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  height: 30%;
`;

const FeatureTitle = styled.h1`
  margin: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  border: solid;
  height: 100%;
  flex-wrap: wrap;
`;

const Project = styled.div`
  height: 80%;
  border: solid;
  border-color: red;
  width: 20vw;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const Featured = () => {
  return (
    <Container>
      <FeatureTitle>Featured projects</FeatureTitle>
      <Wrapper>
        <Project>
          <Title>Bishan</Title>
        </Project>
        <Project>
          <Title>Woodlands</Title>
        </Project>
        <Project>
          <Title>Tengah</Title>
        </Project>
        <Project>
          <Title>Keppel</Title>
        </Project>
        <Project>
          <Title>Yo Mama</Title>
        </Project>
        <Project>
          <Title>Changi</Title>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Featured;

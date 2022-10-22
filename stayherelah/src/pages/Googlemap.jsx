import Header from "../components/Header";
import background from "../images/home/houses.jpg";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Googlemap = () => {
  return (
    <>
      <Container>
        <Header></Header>
      </Container>
    </>
  );
};

export default Googlemap;
import React from "react";
import { Calculator } from "../components/components/Calculator";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Mortgage = () => {
  return (
    <>
      <Container>
        <Header />
        <Calculator />
      </Container>
    </>
  );
};

export default Mortgage;

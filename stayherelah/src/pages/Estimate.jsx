import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Estimate = () => {
  return (
    <>
      <Container>
        <Header />
        <Form />
      </Container>
    </>
  );
};

export default Estimate;

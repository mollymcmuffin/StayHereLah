import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import styled from "styled-components";
import RenovateInfo from "../components/RenovateInfo";
import GrantInfo from "../components/GrantInfo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Estimate = () => {
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <GrantInfo />
          <Form />
          <RenovateInfo />
        </Wrapper>
      </Container>
    </>
  );
};

export default Estimate;

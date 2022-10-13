import styled from "styled-components";

import React from "react";

const Container = styled.div`
<<<<<<< HEAD
  border-color: black;
  border-style: solid;
  display: flex;
  align-items: center;
  gap: 10rem;
  height: 3rem;
=======
  background-color: red;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
>>>>>>> main
`;

const Wrapper = styled.div`
  display: flex;

  border: solid;
`;

const Left = styled.div`
  border: solid;
  margin-left: 3rem;
`;

const Centre = styled.div`
  display: flex;
  border: solid;
`;

const MenuItem = styled.div``;

const header = () => {
  return (
    <Container>
      <Left>StayHereLah!</Left>
      <Centre>
        <MenuItem>Explore</MenuItem>
        <MenuItem>BTO projects</MenuItem>
      </Centre>
    </Container>
  );
};

export default header;

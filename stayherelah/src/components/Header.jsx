import styled from "styled-components";
import { Link } from "react-router-dom";

import React from "react";

const Container = styled.div`
  border-color: black;
  border-style: solid;
  display: flex;
  align-items: center;
  gap: 10rem;
  height: 3rem;
  background-color: white;
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
  gap: 1rem;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1.5rem;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const header = () => {
  return (
    <Container>
      <Left>
        <LogoLink to={`/`}>StayHereLah!</LogoLink>
      </Left>
      <Centre>
        <MenuItem>
          <StyledLink to={`/explore`}>Explore</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={`/bto`}>BTO projects</StyledLink>
        </MenuItem>
      </Centre>
    </Container>
  );
};

export default header;

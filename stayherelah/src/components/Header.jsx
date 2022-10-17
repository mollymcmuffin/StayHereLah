import styled from "styled-components";
import { Link } from "react-router-dom";

import React from "react";

const Container = styled.div`
  border-color: black;
  border-style: none;
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
  border: none;
  margin-left: 3rem;
`;

const Centre = styled.div`
  display: flex;
  border: none;
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
  font-size: 1.1rem;
  font-weight: 500;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
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

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Neighbourhood = styled.div`
  height: 30vh;
  width: 10vw;
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

const HoodLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
`;

const Hood = ({ hoodName, id }) => {
  return (
    <Neighbourhood>
      <HoodLink to={`/neighbourhood/${id}`}>
        <Title>{hoodName}</Title>
      </HoodLink>
    </Neighbourhood>
  );
};

export default Hood;

import React from "react";
import styled from "styled-components";
import Hood from "./Hood";

const Container = styled.div`
  background-color: #f8f3d4;
  height: 100%;
  flex: 1;
  border: none;
  border-color: red;
`;

const HoodsContainer = styled.div`
  display: flex;
  border: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 2rem;
  text-align: center;
`;

const AllHood = ({ data }) => {
  console.log(data["neighbourhood"]["1AMK"]);
  const hoods = data["neighbourhood"];
  const hoodsArr = [];
  for (var key in hoods) {
    console.log(key);
    hoodsArr.push(key);
  }
  console.log(hoodsArr);

  return (
    <Container>
      <Title>Neighbourhoods</Title>
      <HoodsContainer>
        {hoodsArr.map((hood, index) => (
          <Hood key={index} hoodName={hood} id={index} />
        ))}
      </HoodsContainer>
    </Container>
  );
};

export default AllHood;

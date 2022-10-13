import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  flex: 1 1 auto;
`;

const SearchContainer = styled.div`
  height: 3rem;
  border: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Search = () => {
  return (
    <Container>
      <SearchContainer>Search</SearchContainer>
    </Container>
  );
};

export default Search;

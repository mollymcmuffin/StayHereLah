import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  flex: 1 1 auto;
`;

const Wrapper = styled.div`
  height: 3rem;
  width: 10rem;
  border: solid;
  border-color: peachpuff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SearchContainer = styled.div`
  border: solid;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  height: 2rem;
`;

const Search = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <SearchInput></SearchInput>
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default Search;

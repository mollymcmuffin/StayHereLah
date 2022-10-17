import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-left: 1rem;
`;

const SearchInput = styled.input`
  border: none;
  height: 4rem;
  width: 50vw;
  outline: none;
  padding-left: 3rem;
  font-size: 1.5rem;
`;

const Search = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchOutlinedIcon fontSize="large" />
        <SearchInput placeholder="Search for BTO" />
      </SearchContainer>
    </Container>
  );
};

export default Search;

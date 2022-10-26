import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  flex: 1 1 auto;
`;

const Button = styled.button`
  background-color: #344ae2;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem 2rem;
  color: white;
  border-radius: 5px;
`;

const SearchContainer = styled.div`
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-left: 1rem;
  padding: 1rem;
  border-radius: 10px;
`;

const SearchInput = styled.input`
  border: none;
  height: 4rem;
  width: 50vw;
  outline: none;

  font-size: 1.5rem;
`;

const Search = () => {
  return (
    <Container>
      {/* <SearchContainer>
        <SearchOutlinedIcon fontSize="large" />
        <SearchInput placeholder="Search for BTO" />
        <Button>Search</Button>
      </SearchContainer> */}
    </Container>
  );
};

export default Search;

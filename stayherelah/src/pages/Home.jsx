import Header from "../components/Header";
import Featured from "../components/Featured";
import background from "../images/home/houses.jpg";
import styled from "styled-components";
import Search from "../components/Search";

import React from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Search></Search>
        <Featured></Featured>
      </Container>
    </>
  );
};

export default Home;

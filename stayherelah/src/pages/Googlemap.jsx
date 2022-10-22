import Header from "../components/Header";
import background from "../images/home/houses.jpg";
import Map from "../components/Map_Explore"
import styled from "styled-components";
import {useLocation} from "react-router-dom";

import React from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Googlemap = () => {

  const location = useLocation()
  let data = location.state.from;

  return (
    <>
      <Container>
        <Header></Header>
        <Map location = {data}></Map>
      </Container>
    </>
  );
};

export default Googlemap;
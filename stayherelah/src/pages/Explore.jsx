import Header from "../components/Header";
//import Neighbour from "../components/Neighbour";
import background from "../images/home/houses.jpg";
import styled from "styled-components";

import React from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Explore = () => {
  // return (
  //   <>
  //     <Container>
  //       <Header></Header>
  //       <Neighbour></Neighbour>
  //     </Container>
  //   </>
  // );
};

export default Explore;

import Header from "../components/Header";
import background from "../images/home/houses.jpg";
import Map from "../components/Map_Explore"
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar";
import Navbar from "../components/Navbar";
import React from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Box = styled.div`
  height: 100%;
  background-color: lightgrey;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
`;

const Leftpanel = styled.div`
  display: inline-block;
  width: 10%
  margin-bottom : 100 px;
`;

const Rightpanel = styled.div`
  display: inline-block;
  width: 100%
`;

const Googlemap = () => {

  const location = useLocation()
  let data = location.state.from;

  return (
    <>
      <Container>
        <Header></Header>
        <Box>
          <Row>
            <Leftpanel>
              <ProSidebarProvider>
                <Navbar/>
              </ProSidebarProvider>
            </Leftpanel>
            <Rightpanel>
              <Map location = {data}></Map>
            </Rightpanel>
          </Row>
        </Box>
      </Container>
    </>
  );
};

export default Googlemap;
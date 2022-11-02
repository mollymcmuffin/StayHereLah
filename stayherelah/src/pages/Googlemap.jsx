import Header from "../components/Header";
import background from "../images/home/houses.jpg";
import Map from "../components/Map_Explore";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProSidebarProvider } from "react-pro-sidebar";
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
  margin-bottom: 100px;
`;

const Rightpanel = styled.div`
  display: inline-block;
  width: 100%;
`;

const Googlemap = () => {
  const location = useLocation();
  let data = location.state.from;
  console.log(data);

  return (
    <>
      <Container>
        <Header></Header>
        <Box>
          <Row>
            <Leftpanel>
              <ProSidebarProvider>
                <Navbar location={data}></Navbar>
              </ProSidebarProvider>
            </Leftpanel>
            <Rightpanel>
              <Map location={data}></Map>
            </Rightpanel>
          </Row>
        </Box>
      </Container>
    </>
  );
};

export default Googlemap;

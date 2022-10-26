import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Map from "../components/Map";
import MapForAllProjects from "../components/MapForAllProjects";
import AllProjects from "../components/AllProjects";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #f8f3d4;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MapFacilityContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MapContainer = styled.div`
  height: 100%;
`;

const BtoProjects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const response = await snapshot.val();
      setData(response);
    });
  }, []);

  return (
    <>
      {data && (
        <Container>
          <Header />
          <Wrapper>
            <AllProjects data={data} />
            <MapFacilityContainer>
              <MapContainer>
                <MapForAllProjects projects={data} />
              </MapContainer>
            </MapFacilityContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default BtoProjects;

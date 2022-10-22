import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Map from "../components/Map";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import ProjectDetails from "../components/ProjectDetails";

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: peachpuff;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProjectContainer = styled.div`
  border: solid;
  border-color: purple;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MapFacilityContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const FacilityContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Facility = styled.div`
  background-color: #e1ceb5;
  padding: 0.5rem;
  border-radius: 5px;
`;

const Title = styled.h1``;

const MapContainer = styled.div`
  height: 80%;
  border: solid;
`;

const FacilitiesWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Property = () => {
  const location = useLocation();
  const urlName = location.pathname.split("/"); //http://localhost:3000/bto/mature/0
  const id = urlName[3];
  const maturity = urlName[2];
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const data = await snapshot.val();
      console.log(data["mature"]["01Project_Name"][0]);
      setProjects(data);
    });
  }, []);

  return (
    <>
      {projects && (
        <Container>
          <Header />
          <Wrapper>
            <ProjectDetails projects={projects} maturity={maturity} id={id} />
            <MapFacilityContainer>
              <FacilityContainer>
                <Title>Nearby Facilities</Title>
                <FacilitiesWrapper>
                  <Facility>SSS School (8 mins Walk)</Facility>
                  <Facility>Clark Quay MRT (2 mins Walk)</Facility>
                  <Facility>OCS Clinic (5 mins Walk)</Facility>
                </FacilitiesWrapper>
              </FacilityContainer>
              <MapContainer>
                <Map />
              </MapContainer>
            </MapFacilityContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Property;

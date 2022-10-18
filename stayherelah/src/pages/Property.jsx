import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Map from "../components/Map";
import { db } from "../firebase";
import { ref, onValue, get } from "firebase/database";
import { Await, useLocation } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
`;

const PropertyContainer = styled.div``;

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
  border: solid;
  height: 100%;
  width: 100%;
`;

const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  border: solid;
`;

const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LaunchDate = styled.h2``;

const FlatDetails = styled.div``;

const Detail = styled.p``;

const PriceContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.p``;

const NearbyPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

const CalculateButton = styled.button`
  height: 3rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
`;

const FacilityContainer = styled.div`
  height: 20%;
  border: solid;
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
  const id = location.pathname.split("/")[3];
  const [projects, setProjects] = useState({});
  const [projectName, setProjectName] = useState("");

  console.log(id);

  useEffect(() => {
    const getProjects = () => {
      try {
        console.log("running function");
        const dataRef = ref(db, "mature/");
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          setProjects(data);
        });
      } catch (error) {}
    };

    getProjects();
  }, []);

  console.log(projects["01Project_Name"]);

  return (
    <>
      <Container>
        <Header></Header>
        <Wrapper>
          <ProjectContainer>
            <ProjectTitle>
              SCSE BTO, Clark Quay 179024 {projectName}
            </ProjectTitle>
            <ProjectInformation>
              <LaunchDate>Upcoming Launch:</LaunchDate>
              <FlatDetails>
                <h2>Flat types & Number of Units</h2>
                <Detail>2 room flex xxx</Detail>
                <Detail>3 room flex xxx</Detail>
                <Detail>4 room flex xxx</Detail>
              </FlatDetails>
              <PriceContainer>
                <PriceInfo>
                  Selling Price (Excl. Grants)
                  <Price>From S$102k</Price>
                </PriceInfo>
                <PriceInfo>
                  Selling Price (Incl. Grants)
                  <Price>From S$22k</Price>
                </PriceInfo>
              </PriceContainer>
              <NearbyPriceContainer>
                Transacted Prices of Resale Flats Nearby
                <Price>$426k - $540k</Price>
              </NearbyPriceContainer>
            </ProjectInformation>
            <CalculateButton>Calculate Your Personalised Cost</CalculateButton>
          </ProjectContainer>
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
    </>
  );
};

export default Property;

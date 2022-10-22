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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FacilityContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const FacilitiesWrapper = styled.div`
  height: 90%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const FacilityButton = styled.button`
  background-color: #ffde7d;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
`;

const Title = styled.h1``;

const MapContainer = styled.div`
  height: 80%;
`;

const FacilitiesInfo = styled.div`
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
  const [mall, setMall] = useState(null);
  const [mrt, setMrt] = useState(null);
  const [prisch, setPrisch] = useState(null);
  const [secsch, setSecsch] = useState(null);

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const data = await snapshot.val();
      console.log(data["mature"]["01Project_Name"][0]);
      setProjects(data);
      setMall(data[maturity]["05mall"][`mall0${id}`]);
      setMrt(data[maturity]["06mrt"][`mrt0${id}`]);
      setPrisch(data[maturity]["08Primary_School"][`Primary_School0${id}`]);
      setSecsch(data[maturity]["09Secondary_School"][`Secondary_School${id}`]);
      console.log(mrt);
      console.log(mall);
      console.log(prisch);
      console.log(secsch);
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
                <FacilitiesWrapper>
                  <Title>Nearby Facilities</Title>
                  <FacilitiesInfo>
                    <FacilityButton>MRT</FacilityButton>
                    <FacilityButton>Mall</FacilityButton>
                    <FacilityButton>Primary School</FacilityButton>
                    <FacilityButton>Secondary School</FacilityButton>
                    <FacilityButton>Highway</FacilityButton>
                  </FacilitiesInfo>
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

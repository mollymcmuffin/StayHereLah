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

const Title = styled.h1``;

const MapContainer = styled.div`
  height: 80%;
`;

const FacilitiesInfo = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const FacilityInput = styled.input``;
const FacilityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const FacilityTitle = styled.span``;

const Property = () => {
  const location = useLocation();
  const urlName = location.pathname.split("/"); //http://localhost:3000/bto/mature/0
  const id = urlName[3];
  const maturity = urlName[2];
  const [projects, setProjects] = useState(null);
  const [mallxy, setMallxy] = useState(null);
  const [mrtxy, setMrtxy] = useState(null);
  const [prischxy, setPrischxy] = useState(null);
  const [secschxy, setSecschxy] = useState(null);
  const [highwayxy, setHighwayxy] = useState(null);
  const [option, setOption] = useState(0);
  const [facility, setFacility] = useState({
    facilities: {
      mrt: false,
      mall: false,
      prisch: false,
      secsch: false,
      highway: false,
    },
  });

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const data = await snapshot.val();
      setProjects(data);
      setMallxy(data[maturity]["05mall"][`mall0${id}`]["Mall_XY"]);
      setMrtxy(data[maturity]["06mrt"][`mrt0${id}`]["Mrt_XY"]);
      setPrischxy(
        data[maturity]["08Primary_School"][`Primary_School0${id}`]["Primary_XY"]
      );
      setSecschxy(
        data[maturity]["09Secondary_School"][`Secondary_School${id}`]["Sec_XY"]
      );
      setHighwayxy(data[maturity]["04highway"][`highway0${id}`]["highway_XY"]);
    });
  }, []);

  const handleFacility = (e) => {
    let facilities = { ...facility.facilities };
    let name = e.target.name;
    facilities[name] = !facilities[name];
    setFacility({ facilities: facilities });
  };

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
                    <FacilityBox>
                      <FacilityTitle>MRT</FacilityTitle>
                      <FacilityInput
                        type="checkbox"
                        name="mrt"
                        onChange={handleFacility}
                      />
                    </FacilityBox>
                    <FacilityBox>
                      <FacilityTitle>Mall</FacilityTitle>
                      <FacilityInput
                        type="checkbox"
                        name="mall"
                        onChange={handleFacility}
                      />
                    </FacilityBox>
                    <FacilityBox>
                      <FacilityTitle>Primary School</FacilityTitle>
                      <FacilityInput
                        type="checkbox"
                        name="prisch"
                        onChange={handleFacility}
                      />
                    </FacilityBox>
                    <FacilityBox>
                      <FacilityTitle>Secondary School</FacilityTitle>
                      <FacilityInput
                        type="checkbox"
                        name="secsch"
                        onChange={handleFacility}
                      />
                    </FacilityBox>
                    <FacilityBox>
                      <FacilityTitle>Highway</FacilityTitle>
                      <FacilityInput
                        type="checkbox"
                        name="highway"
                        onChange={handleFacility}
                      />
                    </FacilityBox>
                  </FacilitiesInfo>
                </FacilitiesWrapper>
              </FacilityContainer>
              <MapContainer>
                <Map
                  facilities={facility}
                  projects={projects}
                  maturity={maturity}
                  id={id}
                />
              </MapContainer>
            </MapFacilityContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Property;

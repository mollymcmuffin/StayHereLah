import { React, useState } from "react";
import styled from "styled-components";
import NeighbourhoodMap from "./NeighbourhoodMap";

const Container = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  border-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FacilityInput = styled.input``;

const FacilityContainer = styled.div`
  height: 4rem;
  display: flex;
  gap: 1rem;
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  border-color: blue;
`;

const FacilityBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
`;

const FacilityTitle = styled.span``;

const NeighbourhoodDetails = ({ data, id }) => {
  const [facility, setFacility] = useState({
    facilities: {
      mrt: false,
      mall: false,
      prisch: false,
      secsch: false,
      highway: false,
    },
  });

  const hoods = data["neighbourhood"];
  const hoodsArr = [];
  for (var key in hoods) {
    hoodsArr.push(key);
  }
  console.log(hoodsArr[id]);
  console.log(hoods[hoodsArr[id]]);
  const Names = hoods[hoodsArr[id]]["Name"];
  const xy = hoods[hoodsArr[id]]["XY"];
  console.log(xy);

  const handleFacility = (e) => {
    let facilities = { ...facility.facilities };
    let name = e.target.name;
    facilities[name] = !facilities[name];
    setFacility({ facilities: facilities });
  };

  return (
    <Container>
      {/* <Title>Nearby Facilities</Title>
      <FacilityContainer>
        <FacilityBox>
          <FacilityTitle>MRT</FacilityTitle>
          <FacilityInput type="checkbox" name="mrt" onChange={handleFacility} />
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
      </FacilityContainer> */}
      <MapContainer>
        <NeighbourhoodMap data={data} id={id} facilities={facility} />
      </MapContainer>
    </Container>
  );
};

export default NeighbourhoodDetails;

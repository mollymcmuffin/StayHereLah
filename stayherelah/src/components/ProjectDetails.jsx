import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  border-color: purple;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
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

const ProjectDetails = ({ projects, id, maturity }) => {
  console.log(projects);
  const flatData = [...projects[maturity]["03flattype"][`flattype0${id}`]];
  console.log(flatData);
  return (
    <ProjectContainer>
      <ProjectTitle>{projects[maturity]["01Project_Name"][id]}</ProjectTitle>
      <ProjectInformation>
        <LaunchDate>
          Completion Date: {projects[maturity]["02est_time"][id]}
        </LaunchDate>
        <FlatDetails>
          <h2>Flat types & Number of Units</h2>
          {flatData.map((info) => (
            <Detail>{info}</Detail>
          ))}
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
  );
};

export default ProjectDetails;

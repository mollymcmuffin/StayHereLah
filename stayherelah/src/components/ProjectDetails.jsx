import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: black;
`;

const Wrapper = styled.div`
  background-color: #ffe7cc;
  height: 80%;
  width: 40vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LaunchDate = styled.h2``;

const FlatDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.p``;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PriceInfo = styled.p`
  display: flex;
  font-weight: 300;
  gap: 0.5rem;
`;

const Price = styled.p`
  font-weight: 700;
`;

const FlatDetailsTitle = styled.h2`
  margin-bottom: 1rem;
`;

const CalculateButton = styled.button`
  height: 3rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  background-color: #344ae2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 1rem;
`;

const ProjectDetails = ({ projects, id, maturity }) => {
  //console.log(projects);
  const flatData = [...projects[maturity]["03flattype"][`flattype0${id}`]];
  const tworoom = projects[maturity]["16two_room_min_price"][id];
  console.log("tworoom");
  const threeroom = projects[maturity]["12three_room_min_price"][id];
  console.log("threeroom");
  const fourroom = projects[maturity]["14four_room_min_price"][id];
  console.log("fourroom");
  const fiveroom = projects[maturity]["18five_room_min_price"][id];
  console.log("fiveroom");
  const specialroom =
    maturity == "mature"
      ? projects[maturity]["20threegen_room_min_price"][id]
      : projects[maturity]["20twoflexb_room_min_price"][id];
  console.log("threegenroom");
  //console.log(flatData);
  return (
    <ProjectContainer>
      <Wrapper>
        <ProjectTitle>{projects[maturity]["01Project_Name"][id]}</ProjectTitle>
        <ProjectInformation>
          <LaunchDate>
            Completion Date: {projects[maturity]["02est_time"][id]}
          </LaunchDate>
          <FlatDetails>
            <FlatDetailsTitle>Flat types & Number of Units</FlatDetailsTitle>
            {flatData.map((info) => (
              <Detail key={flatData.indexOf(info)}>{info}</Detail>
            ))}
          </FlatDetails>
          <PriceContainer>
            {tworoom !== "nil" && (
              <PriceInfo>
                TWO ROOM STARTING PRICE: <Price>${tworoom}</Price>{" "}
              </PriceInfo>
            )}

            {threeroom !== "nil" && (
              <PriceInfo>
                {" "}
                THREE ROOM STARTING PRICE: <Price> ${threeroom}</Price>
              </PriceInfo>
            )}
            {fourroom !== "nil" && (
              <PriceInfo>
                FOUR ROOM STARTING PRICE: <Price>${fourroom}</Price>
              </PriceInfo>
            )}
            {fiveroom !== "nil" && (
              <PriceInfo>
                FIVE ROOM STARTING PRICE: <Price>${fiveroom}</Price>
              </PriceInfo>
            )}
            {specialroom !== "nil" && (
              <PriceInfo>
                {maturity == "mature" ? "THREE-GEN ROOM" : "TWO-ROOM FLEXI"}
                STARTING PRICE: <Price>${specialroom}</Price>
              </PriceInfo>
            )}
          </PriceContainer>
          {/* <NearbyPriceContainer>
            Transacted Prices of Resale Flats Nearby
            <Price>$426k - $540k</Price>
          </NearbyPriceContainer> */}
        </ProjectInformation>
      </Wrapper>

      <Link to={"/estimate"}>
        <CalculateButton>Calculate Your Loan</CalculateButton>
      </Link>
    </ProjectContainer>
  );
};

export default ProjectDetails;

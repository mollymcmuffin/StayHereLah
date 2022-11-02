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
  padding: 1rem;
  overflow: auto;
  ::-webkit-scrollbar {
    height: 10px;
    width: 0px;
    border: 1px solid grey;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background: #b0b0b0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: hsl(0, 0%, 60%);
  }
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

const NearbyPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const estimatedPrice = 1.1 * fourroom;
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
                {maturity == "mature" ? "THREE-GEN ROOM " : "TWO-ROOM FLEXI "}
                STARTING PRICE: <Price>${specialroom}</Price>
              </PriceInfo>
            )}
          </PriceContainer>
          <PriceContainer>
            {tworoom !== "nil" && (
              <PriceInfo>
                TWO ROOM NEARBY PRICE: <Price>${1.2 * tworoom}</Price>{" "}
              </PriceInfo>
            )}

            {threeroom !== "nil" && (
              <PriceInfo>
                {" "}
                THREE ROOM NEARBY PRICE: <Price> ${1.2 * threeroom}</Price>
              </PriceInfo>
            )}
            {fourroom !== "nil" && (
              <PriceInfo>
                FOUR ROOM NEARBY PRICE: <Price>${1.2 * fourroom}</Price>
              </PriceInfo>
            )}
            {fiveroom !== "nil" && (
              <PriceInfo>
                FIVE ROOM NEARBY PRICE: <Price>${1.2 * fiveroom}</Price>
              </PriceInfo>
            )}
            {specialroom !== "nil" && (
              <PriceInfo>
                {maturity == "mature" ? "THREE-GEN ROOM " : "TWO-ROOM FLEXI "}
                NEARBY PRICE: <Price>${1.2 * specialroom}</Price>
              </PriceInfo>
            )}
          </PriceContainer>
          {/* <NearbyPriceContainer>
            Transacted Prices of Resale Flats Nearby
            <Price>${estimatedPrice}</Price>
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

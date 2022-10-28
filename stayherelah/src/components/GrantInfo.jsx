import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: white;
  height: 80%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const GrantBox = styled.div`
  height: 60%;
  width: 60%;
  padding: 1rem;
  background-color: #ffe7cc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

const GrantInfo = () => {
  return (
    <Box>
      <GrantBox>
        <h3>Enhanced CPF Housing Grant: </h3>
        <br />
        <p>
          The Enhanced Housing Grant is a CPF Housing Grant for first time
          buyers applying for a new Build-To-Order (BTO)flats. It helps to make
          housing more affordable and accessible to Singaporeans.
        </p>
        <br />

        <br />

        <h3>Step-Up CPF Housing Grant: </h3>
        <br />
        <p>
          Step-Up Housing Grant is used to offset the purchase of the property
          and decrease mortgage loan for the purchase of the flat.
        </p>
      </GrantBox>
    </Box>
  );
};

export default GrantInfo;

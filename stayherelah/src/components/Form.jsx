import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./FormInputGroup";
import { FaRegIdBadge } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: #ffe7cc;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  gap: 1rem;
`;

const FormContainer = styled.form`
  width: 80%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-top: 2rem;
  flex-grow: 1;
  align-items: center;
`;

const FormButton = styled.button`
  width: 50%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #344ae2;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: large;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: 500;
`;

const Mortgagebutton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #defcf9;
  color: black;
  border-radius: 5px;
  border: none;
  font-size: large;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input``;

const InputContainer = styled.div`
  display: flex;
`;

const InputTitle = styled.span`
  margin-right: 0.5rem;
`;

const OutputInfo = styled.h4`
  display: flex;
  justify-content: center;
`;

const InfoTitle = styled.p`
  font-weight: 700;
`;

const GrantContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 80%;
  margin-bottom: 5rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
`;

const OutputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

function Form() {
  const [age, setAge] = useState(35);
  const [married, setmarried] = useState(0);
  const [grossmonthly, setgrossmonthly] = useState("");
  const [lumpsum, setlumpsum] = useState("");
  const [disposable, setdisposable] = useState("");
  const [saving, setsaving] = useState("");
  const [enhancesingle, setenhancesingle] = useState(0);
  const [enhancecouple, setenhancecouple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [stepupgrant, setstepupgrant] = useState(0);
  const [recommendation, setrecommendation] = useState("");
  const [renovate, setrenovate] = useState(0);

  function rec_recommend() {
    if ((married == 1 && age >= 21 &&grossmonthly<=14000) || (age >= 35 && married == 0 && grossmonthly<=7000))
    {
    setrenovate(6 * grossmonthly);
    return renovate;
    }
    else 
    setrenovate(0);
    return renovate
  }

  function recommend() {
    if (age >= 65) {
      setrecommendation("you are not allowed to bto!!!");
    }
    else if((married == 1 && age >= 21 &&1<=grossmonthly<=14000) || (age >= 35 && married == 0 && 1<=grossmonthly<=7000)) {
      setrecommendation("Congrats!!You are eligible to bto!! Refer to renovation guide for tips!");
      return recommendation;
    
    } 
    else {
      setrecommendation("you are not allowed to bto!!!");
    }
  }

  function calculateLoanAmount() {
    setdisposable(grossmonthly - lumpsum);
    return disposable;
  }

  function Estimationsingle() {
    setMonthlyPayment(
      calculateStepupgrant(grossmonthly) +
        calculateSingleGrant(grossmonthly) +
        grossmonthly * 12 * 5
    );
    return monthlyPayment;
  }

  function Estimationcouple() {
    setMonthlyPayment(
      calculateStepupgrant(grossmonthly) +
        calculatecoupleGrant(grossmonthly) +
        grossmonthly * 12 * 5
    );
    return monthlyPayment;
  }

  function calculateStepupgrant() {
    if (grossmonthly <= 7000) {
      setstepupgrant(15000);
      return stepupgrant;
    } else setstepupgrant(0);
    return stepupgrant;
  }

  function calculatecoupleGrant() {
    if (grossmonthly <= 1500) {
      setenhancecouple(80000);
      return enhancecouple;
    } else if ((grossmonthly > 1500) & (grossmonthly <= 2000)) {
      setenhancecouple(75000);
      return enhancecouple;
    } else if ((grossmonthly > 2000) & (grossmonthly <= 2500)) {
      setenhancecouple(70000);
      return enhancecouple;
    } else if ((grossmonthly > 2500) & (grossmonthly <= 3000)) {
      setenhancecouple(65000);
      return enhancecouple;
    } else if ((grossmonthly > 3000) & (grossmonthly <= 3500)) {
      setenhancecouple(60000);
      return enhancecouple;
    } else if ((grossmonthly > 3500) & (grossmonthly <= 4000)) {
      setenhancecouple(55000);
      return enhancecouple;
    } else if ((grossmonthly > 4000) & (grossmonthly <= 4500)) {
      setenhancecouple(50000);
      return enhancecouple;
    } else if ((grossmonthly > 4500) & (grossmonthly <= 5000)) {
      setenhancecouple(45000);
      return enhancecouple;
    } else if ((grossmonthly > 5000) & (grossmonthly <= 5500)) {
      setenhancecouple(40000);
      return enhancecouple;
    } else if ((grossmonthly > 5500) & (grossmonthly <= 6000)) {
      setenhancecouple(35000);
      return enhancecouple;
    } else if ((grossmonthly > 6000) & (grossmonthly <= 6500)) {
      setenhancecouple(30000);
      return enhancecouple;
    } else if ((grossmonthly > 6500) & (grossmonthly <= 7000)) {
      setenhancecouple(25000);
      return enhancecouple;
    } else if ((grossmonthly > 7000) & (grossmonthly <= 7500)) {
      setenhancecouple(20000);
      return enhancecouple;
    } else if ((grossmonthly > 7500) & (grossmonthly <= 8000)) {
      setenhancecouple(15000);
      return enhancecouple;
    } else if ((grossmonthly > 8000) & (grossmonthly <= 8500)) {
      setenhancecouple(10000);
      return enhancecouple;
    } else if ((grossmonthly > 8500) & (grossmonthly <= 9000)) {
      setenhancecouple(5000);
      return enhancecouple;
    } else {
      setenhancecouple(0);
      return enhancecouple;
    }
  }

  function calculateSingleGrant() {
    if (grossmonthly <= 750) {
      setenhancesingle(40000);
      return enhancesingle;
    } else if ((grossmonthly > 750) & (grossmonthly <= 1000)) {
      setenhancesingle(37500);
      return enhancesingle;
    } else if ((grossmonthly > 1000) & (grossmonthly <= 1250)) {
      setenhancesingle(35000);
      return enhancesingle;
    } else if ((grossmonthly > 1250) & (grossmonthly <= 1500)) {
      setenhancesingle(32500);
      return enhancesingle;
    } else if ((grossmonthly > 1500) & (grossmonthly <= 1750)) {
      setenhancesingle(30000);
      return enhancesingle;
    } else if ((grossmonthly > 1750) & (grossmonthly <= 2000)) {
      setenhancesingle(27500);
      return enhancesingle;
    } else if ((grossmonthly > 2000) & (grossmonthly <= 2250)) {
      setenhancesingle(25000);
      return enhancesingle;
    } else if ((grossmonthly > 2250) & (grossmonthly <= 2500)) {
      setenhancesingle(22500);
      return enhancesingle;
    } else if ((grossmonthly > 2500) & (grossmonthly <= 2750)) {
      setenhancesingle(20000);
      return enhancesingle;
    } else if ((grossmonthly > 2750) & (grossmonthly <= 3000)) {
      setenhancesingle(17500);
      return enhancesingle;
    } else if ((grossmonthly > 3000) & (grossmonthly <= 3250)) {
      setenhancesingle(15000);
      return enhancesingle;
    } else if ((grossmonthly > 3250) & (grossmonthly <= 3500)) {
      setenhancesingle(12500);
      return enhancesingle;
    } else if ((grossmonthly > 3500) & (grossmonthly <= 3750)) {
      setenhancesingle(10000);
      return enhancesingle;
    } else if ((grossmonthly > 3750) & (grossmonthly <= 4000)) {
      setenhancesingle(7500);
      return enhancesingle;
    } else if ((grossmonthly > 4000) & (grossmonthly <= 4250)) {
      setenhancesingle(5000);
      return enhancesingle;
    } else if ((grossmonthly > 4250) & (grossmonthly <= 4500)) {
      setenhancesingle(2500);
      return enhancesingle;
    } else {
      setenhancesingle(0);
      return enhancesingle;
    }
  }

  function calculategrants() {
    if (age >= 35 && married == 0 && grossmonthly<=7000) {
      Estimationsingle(grossmonthly, disposable);
      return monthlyPayment + saving;
    } else if (((age >= 21 && age < 65) && ((married) => 1))&&grossmonthly<=14000) {
      Estimationcouple(grossmonthly, disposable);
      return monthlyPayment + saving;
      
    } else setMonthlyPayment(0);
           return monthlyPayment;
  }

  return (
    <>
      <Container>
        <Wrapper>
          <h1>
            <FcHome /> Estimate Calculator{" "}
          </h1>
          <FormContainer onSubmit={(e) => e.preventDefault()}>
            <InputContainer>
              <InputTitle>Age</InputTitle>
              <FaRegIdBadge />
              <FormInput
                placeholder="Enter your age"
                value={age}
                onInput={(e) => setAge(e.target.value)}
                onKeyUp={calculateLoanAmount}
                type="number"
              />
            </InputContainer>

            <InputContainer>
              <InputTitle>Married</InputTitle>
              <div>
                <FormInput
                  type={"radio"}
                  name={"Married"}
                  value={1}
                  onInput={(e) => setmarried(e.target.value)}
                />
                Yes
                <FormInput
                  type={"radio"}
                  name={"Married"}
                  value={0}
                  onInput={(e) => setmarried(e.target.value)}
                />
                No
              </div>
            </InputContainer>

            <InputContainer>
              <InputTitle>Gross Monthly</InputTitle>
              <FaDollarSign />
              <FormInput
                placeholder="Enter your Gross Monthly Salary"
                value={grossmonthly}
                onInput={(e) => setgrossmonthly(e.target.value)}
                onKeyUp={calculateLoanAmount}
                type="number"
              />
            </InputContainer>

            <InputContainer>
              <InputTitle>Monthly Expenses</InputTitle>
              <FaDollarSign />
              <FormInput
                placeholder="Monthly expenses"
                value={lumpsum}
                onInput={(e) => setlumpsum(e.target.value)}
                onKeyUp={calculateLoanAmount}
                type="number"
              />
            </InputContainer>

            <InputContainer>
              <InputTitle>Disposable Income</InputTitle>
              <FaDollarSign />
              <FormInput
                placeholder="Enter your funds"
                value={disposable}
                readOnly="true"
                type="number"
              />
            </InputContainer>

            <InputContainer>
              <InputTitle>Saving & CPF Balance</InputTitle>
              <FaDollarSign />
              <FormInput
                placeholder="Savings"
                value={saving}
                onInput={(e) => setsaving(e.target.value)}
                type="number"
              />
            </InputContainer>
            <OutputBox>
              <OutputInfo> {recommendation}</OutputInfo>
              <OutputInfo>
                Summary of Cost:
                <FaDollarSign /> {parseFloat(monthlyPayment.toFixed(2))}
              </OutputInfo>
              <OutputInfo>
                Downpayment required(15%):
                <FaDollarSign /> {parseFloat(monthlyPayment*0.15.toFixed(2))}
              </OutputInfo>
              <OutputInfo>
                Recommended Renovation Cost:
                <FaDollarSign /> {renovate}
              </OutputInfo>
            </OutputBox>
          </FormContainer>
          <GrantContainer>
            <InfoTitle>
              <FaDollarSign />
              Grants
            </InfoTitle>
            <InfoTitle>Step-Up CPF Housing Grant: {stepupgrant}</InfoTitle>
            <InfoTitle>EHG Grant: {enhancecouple + enhancesingle}</InfoTitle>
            <InfoTitle>
              Total Grant: {enhancecouple + enhancesingle + stepupgrant}
            </InfoTitle>
          </GrantContainer>

          <ButtonContainer>
            <FormButton
              type="submit"
              // Percentage conversion
              onClick={() => {
                calculategrants();
                recommend();
                rec_recommend();
              }}
              className="btn btn-primary btn-lg w-100 center "
            >
              Calculate
            </FormButton>
            <StyledLink to={"/Mortgage"}>
              <Mortgagebutton>Mortgage</Mortgagebutton>
            </StyledLink>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default Form;

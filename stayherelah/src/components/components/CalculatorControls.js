import React from "react";

const localeOptions = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

export const CalculatorControls = (props) => {
  return (
    <div className="grid__container">
      <div className="grid__item">
        <span className="grid__item--header">
          {parseInt(props.purchasingHousePrice).toLocaleString(
            "en-US",
            localeOptions
          )}
        </span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="purchasingHousePrice"
          min="50000"
          max="750000"
          step="1000"
          value={props.purchasingHousePrice}
          onChange={(event) =>
            props.setPurchasingHousePrice(event.target.value)
          }
        />
        <label className="grid__item--label" htmlFor="purchasingHousePrice">
          Purchasing House Price
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">
          {parseInt(props.depositAmount).toLocaleString("en-US", localeOptions)}
        </span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="depositAmount"
          min="1000"
          max="150000"
          step="1000"
          value={props.depositAmount}
          onChange={(event) => props.setDepositAmount(event.target.value)}
        />
        <label className="grid__item--label" htmlFor="points">
          Deposit
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">{props.mortgageTerm} Years</span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="mortgageTerm"
          min="5"
          max="35"
          step="1"
          value={props.mortgageTerm}
          onChange={(event) => props.setMortgageTerm(event.target.value)}
        />
        <label className="grid__item--label" htmlFor="mortgageTerm">
          Mortgage Term
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">{props.interestRate}%</span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="interestRate"
          min="0.1"
          max="8"
          step="0.1"
          value={props.interestRate}
          onChange={(event) => props.setInterestRate(event.target.value)}
        />
        <label className="grid__item--label" htmlFor="interestRate">
          Interest Rate
        </label>
      </div>
    </div>
  );
};

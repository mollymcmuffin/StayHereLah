import React, { useState } from "react";
import { HeaderFigures } from "./HeaderFigures";
import { CalculatorControls } from "./CalculatorControls";
import { PaymentGraph } from "./PaymentGraph";
import { PaymentTable } from "./PaymentTable";
import { handleMortgageDataChange } from "./utils";

export const Calculator = () => {
  const [depositAmount, setDepositAmount] = useState(72000);
  const [purchasingHousePrice, setPurchasingHousePrice] = useState(285000);
  const [mortgageTerm, setMortgageTerm] = useState(25);
  const [interestRate, setInterestRate] = useState(1.8);

  //Set initial values for the whole mortgage term
  const amountToBorrow = purchasingHousePrice - depositAmount;
  const monthlyPayment =
    ((interestRate / 100 / 12) * amountToBorrow) /
    (1 - Math.pow(1 + interestRate / 100 / 12, (0 - mortgageTerm) * 12));
  const totalRepaid = monthlyPayment * 12 * mortgageTerm;
  const totalInterestPaid = totalRepaid - amountToBorrow;

  const yearlyPayments = handleMortgageDataChange(
    amountToBorrow,
    mortgageTerm,
    interestRate,
    monthlyPayment
  );

  return (
    <>
      <HeaderFigures
        amountToBorrow={amountToBorrow}
        monthlyPayment={monthlyPayment}
        totalRepaid={totalRepaid}
        totalInterestPaid={totalInterestPaid}
        depositAmount={depositAmount}
        purchasingHousePrice={purchasingHousePrice}
      />
      <CalculatorControls
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
        purchasingHousePrice={purchasingHousePrice}
        setPurchasingHousePrice={setPurchasingHousePrice}
        mortgageTerm={mortgageTerm}
        setMortgageTerm={setMortgageTerm}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
      />
      <PaymentGraph
        mortgageTerm={mortgageTerm}
        yearlyPayments={yearlyPayments}
      />
      <PaymentTable
        amountToBorrow={amountToBorrow}
        yearlyPayments={yearlyPayments}
      />
    </>
  );
};

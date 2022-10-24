export const handleMortgageDataChange = (amountToBorrow, mortgageTerm, interestRate, monthlyPayment) => {

    //Set initial values for loop to calculate yearly figures
    let yearDataObject = [{
        year: 0,
        outstandingBalance: amountToBorrow,
        interestPaid: 0,
        interestPaidToDate: 0,
        principalRepaid: 0,
        principalRepaidToDate: 0
    }];
    let outstandingBalance = amountToBorrow;
    let interestPaidToDate = 0;
    let principalRepaidToDate = 0;

    //Loop each year of the mortgage term
    for(let i = 1; i <= mortgageTerm; i++) {

        let monthInterestPaid = 0;
        let interestPaidMonthlyToYearlyIncrementer = 0;
        let monthPrincipalPaid = 0;
        let monthlyPrincipalRepaidToYearlyIncrementer = 0;

        //loop each month of the year as interest is calculated monthly
        for(let j = 0; j < 12; j++) {
            monthInterestPaid = outstandingBalance * interestRate / 100 / 12;
            interestPaidMonthlyToYearlyIncrementer = interestPaidMonthlyToYearlyIncrementer + monthInterestPaid;
            monthPrincipalPaid = monthlyPayment - monthInterestPaid;
            monthlyPrincipalRepaidToYearlyIncrementer = monthlyPrincipalRepaidToYearlyIncrementer + monthPrincipalPaid;
            outstandingBalance = outstandingBalance - monthPrincipalPaid;
        }

        interestPaidToDate = interestPaidToDate + interestPaidMonthlyToYearlyIncrementer;
        principalRepaidToDate = principalRepaidToDate + monthlyPrincipalRepaidToYearlyIncrementer;

        //There's always around £10 left at the end which forces the fraph to go into minus. This just rounds the last figure off at £0.00.
        if(i === mortgageTerm) {
            outstandingBalance = 0;
        }

        yearDataObject.push({
            year: i,
            outstandingBalance: parseFloat(outstandingBalance.toFixed(2)),
            interestPaid: parseFloat(interestPaidMonthlyToYearlyIncrementer.toFixed(2)),
            interestPaidToDate: parseFloat(interestPaidToDate.toFixed(2)),
            principalRepaid: parseFloat(monthlyPrincipalRepaidToYearlyIncrementer.toFixed(2)),
            principalRepaidToDate: parseFloat(principalRepaidToDate.toFixed(2))
        });	
    }
    return yearDataObject
}
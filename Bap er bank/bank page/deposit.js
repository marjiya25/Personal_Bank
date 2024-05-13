document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmmountString = depositField.value;
    const  newDepositAmmount = parseFloat(newDepositAmmountString);
    depositField.value = '';
    

    const  depositTotalField = document.getElementById("total-deposit");
    const previousTotalDepositString = depositTotalField.innerText;
    const  previousTotalDeposit = parseFloat(previousTotalDepositString);
    const currentTotalDeposit = previousTotalDeposit + newDepositAmmount;
    depositTotalField.innerText = currentTotalDeposit;   

    const totalBalanceField = document.getElementById('total-ammount');
    const previousTotalBalanceString = totalBalanceField.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance + newDepositAmmount;
    totalBalanceField.innerText = currentTotalBalance;
   

})




document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const newwithdrawAmmountString = withdrawField.value;
    const newwithdrawAmmount = parseFloat(newwithdrawAmmountString);
    withdrawField.value = '';
    

    const withdrawTotalField = document.getElementById('total-withdaw');
    const previousTotalWithdrawString = withdrawTotalField.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
    const currentTotalWithdraw = previousTotalWithdraw + newwithdrawAmmount;
    withdrawTotalField.innerText = currentTotalWithdraw;

    const totalBalanceField = document.getElementById('total-ammount');
    const previousTotalBalanceString = totalBalanceField.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance - newwithdrawAmmount;
    totalBalanceField.innerText = currentTotalBalance;
    

})
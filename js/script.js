const withdraw = document.getElementById('withdraw');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');




// const depositValue = deposit.addEventListener('keyup', (e)=>{
//     e.target.value
//  console.log(e.target.value);
// })


depositBtn.addEventListener('click', ()=>{
 const depositField = document.getElementById('deposit-filed');
 const newDepositAmount = parseFloat(depositField.value);
 const depositTotalElement = document.getElementById('deposit-total');
 const previousDepositTotal =parseFloat( depositTotalElement.innerText);
const currentDepositTotal = previousDepositTotal + newDepositAmount;
 depositTotalElement.innerText = currentDepositTotal;
 
 //   Balance 
 
 const balanceTotalAmountElement = document.getElementById('balance');
 const balanceTotalAmount = balanceTotalAmountElement.innerText;
 const previousBalance = parseFloat(balanceTotalAmount);

 const newBalanceTotalAmount = previousBalance + currentDepositTotal;
 balanceTotalAmountElement.innerText = newBalanceTotalAmount;
 console.log(newBalanceTotalAmount);
 
 
 depositField.value = "";
})



// withdraw Money

document.getElementById('withdraw-btn').addEventListener('click',()=>{
    console.log('I hate you');
    const withdrawTotalString = document.getElementById('withdraw-total');
    const withdraw = withdrawTotalString.innerText;
    const withdrawTotal = parseFloat(withdraw);
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInputElement.value;
    const withdrawInput = parseFloat(withdrawInputValue);
    const totalWithdraw = withdrawInput + withdrawTotal
    withdrawTotalString.innerText = totalWithdraw;

    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const newBlance = parseFloat(balanceString);

    const newBalanceTotalAmount = newBlance - withdrawInput;
    balance.innerText = newBalanceTotalAmount
    console.log();
   














    withdrawInputElement.value = "";


})




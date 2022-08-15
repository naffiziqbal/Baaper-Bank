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



// // Deposite 
document.getElementById('depsite-btn').addEventListener('click', function(){
    
    const depositeField = document.getElementById('deposite-field');
    const depositeNewAmountText = depositeField.value;
    const depositeNewAmount = parseFloat(depositeNewAmountText);

    const depositeElement = document.getElementById('diposite-total');
    const depositePreviousAmountText = depositeElement.innerText;
    const depositePreviousAmount = parseFloat(depositePreviousAmountText)
    // depositeElement.innerText = depositeNewAmount;

    const courrentDepositeAmount = depositePreviousAmount + depositeNewAmount;
    depositeElement.innerText = courrentDepositeAmount;

    const priviousbalancElement = document.getElementById("balance-toatl");
    const previousTotalText = priviousbalancElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalText)

    const newTotalBalance = previousTotalAmount + depositeNewAmount;
    priviousbalancElement.innerText = newTotalBalance;

    depositeField.value = '';
})

// // withdrow 

document.getElementById('withdrow-btn').addEventListener('click',function(){
    const WithdrowField = document.getElementById('Withdrow-field');
    const withdrawText = WithdrowField.value;
    const withdeawNewAmount = parseFloat(withdrawText);
  

    const WithdrowTotal = document.getElementById('Withdrow-total');
    const withpreviousText = WithdrowTotal.innerText;
    const withdrawPreviousAmount = parseFloat(withpreviousText)

    const totalWithdraw = withdrawPreviousAmount + withdeawNewAmount;
    WithdrowTotal.innerText = totalWithdraw;


    // const balanceToatl = document.getElementById('balance-toatl');
    // const balanceTotalText = balanceToatl.innerText;
    // const balanceToatlAmount = parseFloat(balanceTotalText)

    // const newTotalBalance = balanceToatlAmount - withdeawNewAmount;
    // balanceToatl.innerText = newTotalBalance;


    WithdrowField.value = '';
    
})
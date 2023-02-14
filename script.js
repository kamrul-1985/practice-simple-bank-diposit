document.getElementById('deposit-button').addEventListener('click',function(){
    const inputeDipo = document.getElementById('input-deposit');
    const inputeDiposit = inputeDipo.value;

   const previousDipo = document.getElementById('previous-dipo');
  const previousDiposit = previousDipo.innerText;

   const totalDipositAmount = parseFloat(inputeDiposit) + parseFloat(previousDiposit);
   previousDipo.innerText = totalDipositAmount;
   inputeDipo.value ='';

   const previousBale = document.getElementById('previous-balance');
  const previousBalence = previousBale.innerText;
  const totalBalance = parseFloat(inputeDiposit)+parseFloat(previousBalence);
  previousBale.innerText = totalBalance;
 })

 document.getElementById('widthdrow-btn').addEventListener('click',function(){
    const inputeWidth = document.getElementById('inpute-widthdro');
    const inputewidthdrow = inputeWidth.value;

    const previouswidth = document.getElementById('previous-widthdro');
    const previouswidthdrow = previouswidth.innerText;
    const totalwidthdrow = parseFloat(inputewidthdrow) + parseFloat(previouswidthdrow);
    previouswidth.innerText = totalwidthdrow;
    
    const previousBale = document.getElementById('previous-balance');
  const previousBalence = previousBale.innerText;
  const totalBalance2 = parseFloat(previousBalence) - parseFloat(inputewidthdrow);
  previousBale.innerText = totalBalance2;
  inputeWidth.value = '';
 })
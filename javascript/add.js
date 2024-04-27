let addAllowance = document.getElementById("add-allowance");
let addExpenses = document.getElementById("add-expenses");
const submitAllowance = document.getElementById("submit-allowance");
const submitExpenses = document.getElementById("submit-expenses");
const allowanceAmount = document.getElementById("allowance-amount");
const expensesAmount = document.getElementById("expenses-amount");
const balanceAmount = document.getElementById("balance-amount");
const expenseName = document.getElementById("add-expense-name");
const list = document.getElementById("list");
let tempAmount = 0;

submitAllowance.addEventListener("click", () => {

  tempAmount = addAllowance.value;
  
  if(tempAmount == "" || tempAmount < 0){

  }else{
    //Set Budget
    allowanceAmount.innerHTML = tempAmount;
    //Set Balance
    balanceAmount.innerHTML = tempAmount - expensesAmount.innerText;
    //Clear Input Box
    addAllowance.value = "";
  }
});

submitExpenses.addEventListener("click", () => {
  let  amount = parseFloat(addExpenses.value);
  let totalAmount = parseFloat(expensesAmount.innerText) +  amount;
  
  expensesAmount.innerHTML = totalAmount;
  balanceAmount.innerHTML = parseFloat(balanceAmount.innerText) - amount;
  
  listCreator(expenseName.value, addExpenses.value);



});

const listCreator = (_expenseName, _expenseValue) => {

  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content","flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product">${_expenseName}</p><p class="amount">${_expenseValue}</p>`;

};





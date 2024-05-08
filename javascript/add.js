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

  if (!addExpenses.value || !expenseName.value) {
    // productTitleError.classList.remove("hide");
    return false;
  }

  let  amount = parseFloat(addExpenses.value);
  let totalAmount = parseFloat(expensesAmount.innerText) +  amount;
  
  expensesAmount.innerHTML = totalAmount;
  balanceAmount.innerHTML = parseFloat(balanceAmount.innerText) - amount;
  
  listCreator(expenseName.value, addExpenses.value);


  expenseName.value = "";
  addExpenses.value = "";


});

const listCreator = (_expenseName, _expenseValue) => {

  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content","flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product">${_expenseName}</p><p class="amount">${_expenseValue}</p>`;
  // create edit button
  let editButton = document.createElement("button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.style.fontSize = "1.2em";
  editButton.style.border = "none";
  editButton.style.backgroundColor = "#c3cfe2";
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.style.fontSize = "1.2em";
  deleteButton.style.border = "none";
  deleteButton.style.backgroundColor = "#c3cfe2";
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });



  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);

};

// Function to modify the list
const modifyElement = (element, edit = false) => {

  let parentDiv = element.parentElement;
  let currentBalance = balanceAmount.innerText;
  let currentExpense = expensesAmount.innerText;
  let parentAmount = parentDiv.querySelector(".amount").innerText;
  if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    expenseName.value = parentText;
    addExpenses.value = parentAmount;
    disableButtons(true);
  }
  balanceAmount.innerText = parseInt(currentBalance) + parseInt(parentAmount);
  expensesAmount.innerText = parseInt(currentExpense) - parseInt(parentAmount);
  parentDiv.remove();
  
}

//Function to disable edit and delete button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};



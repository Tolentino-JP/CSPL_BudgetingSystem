const allowanceAmount = document.getElementById('allowance-amount');
const totalExpenses = document.getElementById('expenses-amount');
const balanceAmount = document.getElementById('balance-amount');


document.addEventListener('DOMContentLoaded', function(){

    const month = document.getElementById('dateMonth').value;

    fetch(`/getTransactions/budget?month=${month}`)
        .then(response => response.json())
        .then(data => {

            let sum = 0;

            data.foreach(transaction => {

                sum += parseFloat(transaction.amount);

            })  
            console.log(sum);
            allowanceAmount.innerHTML = sum;

        })

})  
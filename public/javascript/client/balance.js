document.addEventListener('DOMContentLoaded', function() {

    const month = document.getElementById('dateMonth').value;
    // GetAllowance(month);
    // GetExpenses(month)
    // GetBalance();
    UpdateData(month);
});

document.getElementById('dateMonth').addEventListener('change', function(){

    const month = this.value;
    // GetAllowance(month);
    // GetExpenses(month);
    // GetBalance();
    UpdateData(month);

});


function GetAllowance(month){

    return new Promise((resolve, reject) => {
        let allowanceAmount = document.getElementById('allowance-amount');

        fetch(`/getInfo/budget?month=${month}`)
            .then(response => response.json())
            .then(data => {
                let sum = 0;
                data.forEach(transaction => {
                    sum += parseFloat(transaction.amount);
                });
                allowanceAmount.innerHTML = sum;
                resolve(sum);
            })
            .catch(error => reject(error));
    });

};

function GetExpenses(month){


    return new Promise((resolve, reject) => {
        let totalExpenses = document.getElementById('expenses-amount');

        fetch(`/getInfo/expense?month=${month}`)
            .then(response => response.json())
            .then(data => {
                let sum = 0;
                data.forEach(transaction => {
                    sum += parseFloat(transaction.expense_amount);
                });
                totalExpenses.innerHTML = sum;
                resolve(sum);
            })
            .catch(error => reject(error));
    });

}

function UpdateData(month){

    Promise.all([GetAllowance(month), GetExpenses(month)])
        .then(values => {
            const [allowance, expenses] = values;
            GetBalance(allowance, expenses);
        })
        .catch(error => console.error('Error fetching data:', error));

}

function GetBalance(allowance, expenses) {
    let balanceAmount = document.getElementById('balance-amount');
    let balance = parseFloat(allowance) - parseFloat(expenses);
    balanceAmount.innerHTML = balance;
    console.log(balance);
}
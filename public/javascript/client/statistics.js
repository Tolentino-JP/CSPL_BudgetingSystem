let stats = document.querySelector("#stats");
let blurBg = document.querySelector(".blur-bg");
let loginContent = document.querySelector(".stats-container");  
let closeStats = document.querySelector(".close-stats");

stats.addEventListener('click', function(){

    loginContent.classList.remove('hide-stats');
    blurBg.classList.remove('hide-blur');

    const month = document.getElementById('dateMonth').value;

    GetData(month);

})

closeStats.addEventListener('click', function(){

    loginContent.classList.add('hide-stats');
    blurBg.classList.add('hide-blur');  

    

})


document.addEventListener('DOMContentLoaded', function() {

    const month = document.getElementById('dateMonth').value;

    GetData(month);

});


function GetData(month){

    
    let mean = document.getElementById('mean');
    let range = document.getElementById('range');
    let max = document.getElementById('max');
    let min = document.getElementById('min');

    

    fetch(`/getTransactions/expense?month=${month}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            if(data.length > 0){

                let sum = 0;
                let count = 0;

                const filterdata = data.filter(transaction => transaction.expense_amount)
                .map(transaction => parseFloat(transaction.expense_amount));

                let maximum = Math.max(...filterdata);
                let minimum = Math.min(...filterdata);

                

                data.forEach(transaction => {

                    sum += parseFloat(transaction.expense_amount);
                    count++;


                });

                

                let average = sum/count;
                mean.innerHTML = average;
                range.innerHTML = maximum - minimum;
                max.innerHTML = maximum;
                min.innerHTML = minimum;

            }else{
                mean.innerHTML = 0;
                range.innerHTML = 0;
                max.innerHTML = 0;
                min.innerHTML = 0;
            }
                
            })
};
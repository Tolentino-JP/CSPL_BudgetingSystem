document.getElementById('dateMonth').addEventListener('change', function() {
    const month = this.value;
    const listDiv = document.getElementById('list');
    fetch(`/getTransactions?month=${month}`)
        .then(response => response.json())
        .then(data => {
            
            listDiv.innerHTML = ''; // Clear previous content

            const table = document.createElement('table');
            const tr = document.createElement('tr');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headers = ['ID', 'Type', 'Amount'];

            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                tr.appendChild(th);
            });
            thead.appendChild(tr);
            table.appendChild(thead);

            if(data.length > 0){
                data.forEach(transaction => {
                    
                    const tr = document.createElement('tr');
                    const tdId = document.createElement('td');
                    // insert id
                    tdId.textContent = transaction.id;
                    tr.appendChild(tdId);
                    // insert amount
                    const tdAmount = document.createElement('td');
                    tdAmount.textContent = transaction.amount;
                    tr.appendChild(tdAmount);
                    // insert date
                    const tdDate = document.createElement('td');
                    const date = new Date(transaction.date);
                    const formattedDate = date.toISOString().split('T')[0]; // yyyy-mm-dd format
                    tdDate.textContent = formattedDate;
                    tr.appendChild(tdDate);

                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                listDiv.appendChild(table);
            }else{
                listDiv.innerHTML = 'No transactions found for the selected month.'; // Clear previous content
            }

        })
        .catch(error => console.error('Error:', error));
});
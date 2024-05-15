const dateMonth = document.getElementById('dateMonth');

dateMonth.addEventListener('change', () => {
    const month = dateMonth.value;
     
})





document.getElementById('dateMonth').addEventListener('change', function() {
    const month = this.value;
    fetch(`/expenses/${month}`)
        .then(response => response.json())
        .then(data => {
            const listDiv = document.getElementById('list');
            listDiv.innerHTML = ''; // Clear previous content

            if (data.length === 0) {
                listDiv.innerHTML = '<p>No expenses found for this month.</p>';
            } else {
                const ul = document.createElement('ul');
                data.forEach(expense => {
                    const li = document.createElement('li');
                    li.textContent = `${expense.expense_name}: ₱${expense.expense_amount}`;
                    ul.appendChild(li);
                });
                listDiv.appendChild(ul);
                
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
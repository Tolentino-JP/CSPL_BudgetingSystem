const express = require('express');
const router = express.Router();
const path = require('path');


const myObject = require('./login');

router.use(express.static(path.join(__dirname, '../../public')));

// function GetDate(){

//     const currentDate = new Date();

//     // Get month, day, and year
//     const month = currentDate.getMonth() + 1; // January is 0, so we add 1
//     const day = currentDate.getDate();
//     const year = currentDate.getFullYear();
//     // Add leading zeros if needed
//     const formattedMonth = month < 10 ? `0${month}` : month;
//     const formattedDay = day < 10 ? `0${day}` : day;
//     // Construct the formatted date string (mm-dd-yyyy)
//     const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
//     return formattedDate;
// }

router.use(express.static(path.join(__dirname, '../../../public')));


router.post('/allowance', (req, res) => {

    const { 'add-allowance': allowance , 'set-date-allowance': date } = req.body;

    console.log(date);

    let sqlQuery = `INSERT INTO allowance (user_id, amount, date) VALUES (${myObject.user_id}, '${allowance}', '${date}')`;

    myObject.client.query(sqlQuery, (err, result) => {
        if (err){
            return console.log(`Error inserting SQL query. error at ${err}`);
        }

        console.log("Data inserted into database successfully");
        res.sendFile(path.join(__dirname, '../html/index.html'));

    });

});

router.post('/expenses', (req,res) => {
    const { 'add-expenses': expenses, 'add-expenses-name': expenseName, 'set-date-expense' : date} = req.body;

    let sqlQuery = `INSERT INTO expenses (user_id, expense_name, expense_amount, date) VALUES (${myObject.user_id},'${expenseName}',${expenses},'${date}')`;

    myObject.client.query(sqlQuery, (err,result) => {
        if (err){
            return console.log(`Error inserting SQL query. error at ${err}`);
        }
        console.log("Data inserted into database successfully");
        res.sendFile(path.join(__dirname, '../html/index.html'));
    });
});

module.exports = router;
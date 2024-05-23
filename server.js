const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

const {router: login} = require('./public/javascript/login');
const addTransaction = require('./public/javascript/add-transact');
const getTransaction = require('./public/javascript/get-transaction');
const balanceGet = require('./public/javascript/balance-get');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/login.html");
});


app.use(express.static('public'));

app.use('/login', login);
app.use('/addTransaction', addTransaction);
app.use('/getInfo', balanceGet);
app.use('/getTransactions', getTransaction);




app.listen(3000, () => {
    console.log("App Listening on port 3000");
});
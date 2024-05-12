const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/login.html");
});

app.use(express.static('public'));


app.listen(3000, () => {
    console.log("App Listening on port 3000");
});
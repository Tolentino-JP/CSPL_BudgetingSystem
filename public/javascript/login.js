const express = require("express");
const router = express.Router();
const path = require('path');



var establishConnection = require('./database');
var client = establishConnection();



router.post('/', (req, res) => {
  var user_id = 1;
  const {username, password} = req.body;

  var sqlQuery = `SELECT username, password FROM users where username = '${username}' AND password = '${password}'`;
  
  client.query(sqlQuery, function(err, result){
    
    if (err) {
      return err;
    } else {


      if ((result.rows.length > 0) && (result.rows[0].username == username) && (result.rows[0].password == password)) {
        // User exists
        // console.log(req.body);
        user_id= result.rows[0].user_id;
        module.exports = {router, user_id};
        res.sendFile(path.join(__dirname, '../html/index.html'));
      }else{
        res.sendFile(path.join(__dirname, '../html/login.html'));
      }

    }


  });

  
});


module.exports = {router};


  
const express = require('express');
const router = express.Router();
const path = require('path');



var establishConnection = require('./database');
var client = establishConnection();

let myObject = {router: router,user_id: 1, client };

router.use(express.static(path.join(__dirname, '../../public')));

router.post('/', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = `SELECT * FROM users where username = '${username}' AND password = '${password}'`;
  
  client.query(sqlQuery, function(err, result){
    
    if (err) {
      return err;
    } else {


      if ((result.rows.length > 0) && (result.rows[0].username == username) && (result.rows[0].password == password)) {
        // User exists
        // console.log(req.body);
        myObject.user_id= result.rows[0].user_id;
        res.sendFile(path.join(__dirname, '../html/index.html'));
      }else{
        res.sendFile(path.join(__dirname, '../html/login.html'));
      }

    }


  });

  
});


module.exports = myObject;


  
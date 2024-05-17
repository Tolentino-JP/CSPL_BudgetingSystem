const express = require('express');
const router = express.Router();
const myObject = require('./login');


router.get('/', (req, res) => {
    
    const month = req.query.month;
    const sqlQuery = `
    SELECT *
    FROM allowance
    WHERE EXTRACT(MONTH FROM date) = ${month} and user_id = ${myObject.user_id}`;

    myObject.client.query(sqlQuery, (err, result) => {
        if(err){
            return err;
        }

        console.log('Fetch successfully');
        res.json(result.rows);
        
    });


})

module.exports = router;

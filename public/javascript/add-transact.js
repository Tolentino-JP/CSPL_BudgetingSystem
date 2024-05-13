const express = require('express');
const router = express.Router();


const {user_id} = require('./login');



router.post('/allowance', (req, res) => {


    console.log(user_id);

})



module.exports = router;
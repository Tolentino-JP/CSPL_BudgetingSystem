const express = require('express');
const router = express.Router();

router.get('/allowance', (req, res) => {

    console.log(req.query);

})



module.exports = router;
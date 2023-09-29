const express = require('express');
const router = express.Router();


//Index...
router.get('/', (req, res) => {
    res.send('Testing')
})




module.exports = router
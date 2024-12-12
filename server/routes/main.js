const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    res.send('<h1>Hello I just made it this far!!!</h1>')
});

module.exports = router;

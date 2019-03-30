const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Dashboard Route successful' })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Dashboard post method successful" })
})

module.exports = router;
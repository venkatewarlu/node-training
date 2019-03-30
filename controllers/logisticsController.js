const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({ message: 'Logistics Route successful' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Logistics id is ${id}`)
    res.json({ message: 'Individual Logistics Route successful' })
})

router.get('/:id/products', (req, res) => {
    const id = req.params.id
    console.log(`Logistics id is ${id}`)
    res.json({ message: 'Individual Logistics with product Route successful' })
})


router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Logistics post method successful" })
})

module.exports = router

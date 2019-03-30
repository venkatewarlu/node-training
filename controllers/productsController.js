const router = require('express').Router();
const productService = require('../services/productsService');

router.get('/', (req, res) => {
    const productslist = productService.getProducts()
    // res.json({ message: 'Product Route Successful' })

    res.json({ products: productslist })

})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Product ID is ${id}`)
    res.json({ message: 'Individual Product Route Successful' })

})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Products post method successful" })
})

module.exports = router
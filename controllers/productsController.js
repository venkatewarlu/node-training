const router = require('express').Router();
const productService = require('../services/productsService');

router.get('/', async (req, res) => {
    const productslist = await productService.getProducts()
    // res.json({ message: 'Product Route Successful' })

    res.json({ products: productslist })

})

// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     console.log(`Product ID is ${id}`)
//     res.json({ message: 'Individual Product Route Successful' })

// })

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const product = await productService.getProductsByID(parseInt(id))
    res.json({ product: product });

})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Products post method successful" })
})

router.post('/:userName/:manufacturerID', async (req, res) => {
    try {
        const { userName, manufacturerID } = req.params;
        await productService.insert(userName, parseInt(manufacturerID), req.body);
        res.json({ message: "Product Successfully added" })

    }
    catch (err) {
        res.status(422).json({ message: err });
    }

})

module.exports = router
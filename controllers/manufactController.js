const router = require('express').Router();
const manufacturerService = require('../services/manfactService');

router.get('/', async (req, res) => {
    const manufacturers = await manufacturerService.getManfacturers()


    res.json({ manufacturers: manufacturers })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const manufacturers = await manufacturerService.getManfacturersByID(parseInt(id))
    res.json({ manufacturers: manufacturers });

})

router.post('/', async (req, res) => {
    try {
        // const { userName, manufacturerID } = req.params;
        await manufacturerService.insert(req.body);
        res.json({ message: "Manufacturer Successfully added" })

    }
    catch (err) {
        res.status(422).json({ message: err });
    }

})



module.exports = router

const router = require('express').Router();

const userService = require('../services/usersService');

router.get('/', async (req, res) => {
    const users = await userService.getUsers()


    res.json({ users: users })
})



// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     console.log(`User id is ${id}`);
//     res.json({ message: 'User Id is denied' })
// })

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const users = await userService.getUsersByID(parseInt(id))
    res.json({ users: users });

})

// router.post('/', (req, res) => {
//     console.log(JSON.stringify(req.body, undefined, 4));
//     res.json({ message: "Users post method successful" })
// })



router.post('/', async (req, res) => {
    try {
        // const { userName, manufacturerID } = req.params;
        await userService.insert(req.body);
        res.json({ message: "User Successfully added" })

    }
    catch (err) {
        res.status(422).json({ message: err });
    }

})
module.exports = router;
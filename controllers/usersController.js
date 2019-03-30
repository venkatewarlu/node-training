const router = require('express').Router();

const userService = require('./services/usersService');

router.get('/', (req, res) => {
    const users = userService.getUsers()


    res.json({ users: users })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`User id is ${id}`);
    res.json({ message: 'User Id is denied' })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Users post method successful" })
})

module.exports = router;
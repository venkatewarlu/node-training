// const express= require('express');
// const app = express();

// below line is the combination of above 2 lines
const app = require('express')();
const bodyParser = require('body-parser');
const productController = require('./controllers/productsController')
const logisticsController = require('./controllers/logisticsController')
const usersController = require('./controllers/usersController')
const dashboardController = require('./controllers/dashboardController')
const authController = require('./controllers/authController')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})


app.use('/users', usersController);

app.use('/products', productController)

app.use('/dashboard', dashboardController)

app.use('/logistics', logisticsController);

app.use('/auth/', authController)

module.exports = app
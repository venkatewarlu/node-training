const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Products',
    password: 'Login@1234',
    port: 5432,
})
client.connect()

client.query('select * from products1', (err, res) => {
    // console.log(res)
})

module.exports = client;
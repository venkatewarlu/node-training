const client = require('../db');

exports.getManfacturers = async () => {

    const result = await client.query('select * from manufacturer1')
    return result.rows;

}

exports.getManfacturersByID = async (id) => {
    const result = await client.query(`select * from manufacturer1 where id=${id}`)
    return result.rows[0];
}

exports.insert = async (manfacturer) => {
    try {
        const query = 'INSERT INTO manufacturer1(name,company,city,state,country,pincode) VALUES($1,$2,$3,$4,$5,$6)'
        values = [manfacturer.name, manfacturer.company, manfacturer.city, manfacturer.state, manfacturer.country, manfacturer.pincode];
        await client.query(query, values)
    }
    catch (err) {
        console.log(err);
        throw 'Unable to insert user'
    }
}
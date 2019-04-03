const client = require('../db');

// exports.getProducts = () => {
//     return [
//         {
//             "name": "One Plus 5",
//             "company": "China",
//             "manufacturer": "One Plus",
//             "owner": "kyangyong",
//             "price": "35000"
//         },
//         {
//             "name": "One Plus 5",
//             "company": "China",
//             "manufacturer": "One Plus",
//             "owner": "kyangyong",
//             "price": "35000"

//         }
//     ]
// }

exports.getProducts = async () => {

    const result = await client.query('select * from products1')
    return result.rows;

}

exports.getProductsByID = async (id) => {
    const result = await client.query(`select * from products1 where id=${id}`)
    return result.rows[0];
}


exports.insert = async (userName, manufacturerID, product) => {
    try {
        const query = 'INSERT INTO products1(name,code,manufacturer,price,description,quantity,createdat,createdby) VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
        values = [product.name, product.code, manufacturerID, product.price, product.description, product.quantity, new Date(), userName];
        await client.query(query, values)
    }
    catch (err) {
        console.log(err);
        throw 'Unable to insert product'
    }
}



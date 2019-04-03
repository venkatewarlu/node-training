// exports.getUsers = () => {
//     return [
//         {
//             firstName: 'Venkat',
//             lastName: 'Puttamsetti',
//             email: 'venkat.p@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },

//         {
//             firstName: 'Sukumar',
//             lastName: 'kuchana',
//             email: 'sukumar@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'Jyothi',
//             lastName: 'Saikam',
//             email: 'jyothi@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Cinni',
//             lastName: 'Thomas',
//             email: 'cinni@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Pradeep',
//             lastName: 'Kumar',
//             email: 'Pradeep@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'active'

//         },
//         {
//             firstName: 'Subha',
//             lastName: 'Vellapandi',
//             email: 'subha@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'Shruthi',
//             lastName: 'Muthu',
//             email: 'Shruthi@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Manisha',
//             lastName: 'Akula',
//             email: 'Manisha@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Priyanka',
//             lastName: 'Chittibabu',
//             email: 'priyanka@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Mohana',
//             lastName: 'Manohar',
//             email: 'mohana@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'Rama',
//             lastName: 'Pandya',
//             email: 'Rama@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Raja',
//             lastName: 'Krishna',
//             email: 'raja@gmail.com',
//             phone: '9704399315',
//             designation: 'Trainee',
//             status: 'active'
//         }
//     ]
// }

const client = require('../db');

exports.getUsers = async () => {

    const result = await client.query('select * from userdetails')
    return result.rows;

}

exports.getUsersByID = async (id) => {
    const result = await client.query(`select * from userdetails where id=${id}`)
    return result.rows[0];
}

exports.insert = async (user) => {
    try {
        const query = 'INSERT INTO userdetails(username,email,mobile,designation,firstname,lastname,status,isdeleted) VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
        values = [user.username, user.email, user.mobile, user.designation, user.firstname, user.lastname, user.status, user.isdeleted];
        await client.query(query, values)
    }
    catch (err) {
        console.log(err);
        throw 'Unable to insert user'
    }
}
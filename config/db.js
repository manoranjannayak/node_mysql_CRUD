const mysql = require('mysql')
require('dotenv').config()

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB connection succeded.')
        return true
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2))
    }
})

module.exports = mysqlConnection

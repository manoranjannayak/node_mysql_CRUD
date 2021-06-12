const mysql = require('../config/db')
const sql = require('../config/query')

// INSERT
exports.insert = async (req, res) => {
    try{
        let requestData = req.body;

        let postData = {
            product_name:requestData.product_name,
            product_price:requestData.product_price,
            product_quantity:requestData.product_quantity,
            product_added: new Date()
        }
    
        mysql.query('INSERT INTO PRODUCT SET?', postData,(err,result)=> {
            console.log('rows', result);
            res.status(200).json({'Inserted Id': result.insertId})
        })
    }catch(error){
        res.status(400).json(error)
    }
}

// GET All
exports.retriveAll = (req, res) => {
    try{
        mysql.query('SELECT * FROM PRODUCT',(err,result)=> {
            console.log('rows', result);
            res.status(200).json({'result': result})
        })
    }catch(error){
        res.status(400).json(error)
    }
}

// GET SINGLE RECORD
exports.getRecord = (req, res) => {
    try{
        mysql.query('SELECT * FROM PRODUCT WHERE product_id=?',req.params.id,(err,result)=> {
            res.status(200).json({'result': result})
        })
    }catch(error){
        res.status(400).json(error)
    }
}

// UPDATE RECORD
exports.updateRecord = (req, res) => {
    try{
        let requestData = req.body;
        let updateData = {
            product_name:requestData.product_name,
            product_price:requestData.product_price,
            product_quantity:requestData.product_quantity,
        }

        mysql.query('UPDATE PRODUCT SET? WHERE product_id=?', [updateData, req.params.id],(err,result)=> {
            res.status(200).json({'result': result})
        })
    }catch(error){
        res.status(400).json(error)
    }
}

// DELETE RECORD
exports.deleteRecord = (req, res) => {
    try{
        mysql.query('DELETE FROM PRODUCT WHERE product_id=?',req.params.id,(err,result)=> {
            res.status(200).json({'result': result})
        })
    }catch(error){
        res.status(400).json(error)
    }
}
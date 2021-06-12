const express = require('express')
const router = express.Router()

const controller = require('../controllers/index')

router.post('/insert', controller.insert)
router.get('/retriveAll', controller.retriveAll)
router.get('/getRecord/:id', controller.getRecord)
router.put('/updateRecord/:id', controller.updateRecord)
router.delete('/deleteRecord/:id', controller.deleteRecord)

module.exports = router
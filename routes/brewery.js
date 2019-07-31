const express = require('express')
const router = express.Router()
const breweryController = require('../controllers/brewery')

router.get('/', breweryController.index)
router.get('/name/:name', breweryController.show)
router.post('/', breweryController.create)
router.put('/:id', breweryController.edit)
router.delete('/:id', breweryController.delete)

module.exports = router
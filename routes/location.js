const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location')

router.get('/', locationController.index)
router.get('/name/:name', locationController.show)
router.post('/', locationController.create)
router.put('/:id', locationController.edit)
router.delete('/:id', locationController.delete)

module.export = router
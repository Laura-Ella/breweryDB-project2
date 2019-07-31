const express = require('express')
const router = express.Router()
const beerController = require('../controllers/beer')

router.get('/', beerController.index)
router.get('/name/:name', beerController.show)
router.post('/', beerController.create)
router.put('/:id', beerController.edit)
router.delete('/:id', beerController.delete)

module.export = router
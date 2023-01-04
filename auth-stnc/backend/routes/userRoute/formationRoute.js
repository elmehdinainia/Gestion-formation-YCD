const router = require('express').Router()
const upload = require('../../outils/implodeImage')

const {CreatFormation,deletformation} = require('../../controllers/usersControllers/formationControllers')
const {tryCatch} =require('../../middlewares/tryCatch')
const {errorHandler} = require('../../middlewares/errorHandler')

router.post('/createformation', upload.single('images'), tryCatch(CreatFormation))
router.delete('/deleteFormation/:id', tryCatch(deletformation))

router.use(errorHandler)

module.exports = router
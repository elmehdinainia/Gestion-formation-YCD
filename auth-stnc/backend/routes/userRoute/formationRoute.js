const router = require('express').Router()
const upload = require('../../outils/implodeImage')

const {CreatFormation,deletformation,updateformation,getFormation} = require('../../controllers/usersControllers/formationControllers')
const {tryCatch} =require('../../middlewares/tryCatch')
const {errorHandler} = require('../../middlewares/errorHandler')

router.post('/createformation', upload.single('images'), tryCatch(CreatFormation))
router.delete('/deleteFormation/:id', tryCatch(deletformation))
router.put('/updateFormation/:id', upload.single('images'), tryCatch(updateformation))
router.get('/getFormation',  tryCatch(getFormation))



router.use(errorHandler)

module.exports = router
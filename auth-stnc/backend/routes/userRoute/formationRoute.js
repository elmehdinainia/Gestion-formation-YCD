const router = require('express').Router()
const upload = require('../../outils/implodeImage')

const {CreatFormation,deletformation,updateformation,getFormation} = require('../../controllers/usersControllers/formationControllers')
const {tryCatch} =require('../../middlewares/tryCatch')
const {errorHandler} = require('../../middlewares/errorHandler')
const {  userPermission  }  = require('../../middlewares/permission')


router.post('/createformation',userPermission, upload.single('images'), tryCatch(CreatFormation))
router.delete('/deleteFormation/:id', userPermission,tryCatch(deletformation))
router.put('/updateFormation/:id',userPermission, upload.single('images'), tryCatch(updateformation))
router.get('/getFormation',userPermission,  tryCatch(getFormation))



router.use(errorHandler)

module.exports = router
const router = require('express').Router()

const {addorganisme,deletorganisme,updateorganisme,getOrganisme} = require('../../controllers/usersControllers/organismeController')
const {tryCatch} =require('../../middlewares/tryCatch')
const {errorHandler} = require('../../middlewares/errorHandler')
const {  userPermission  }  = require('../../middlewares/permission')


router.post('/addorganisme',userPermission, tryCatch(addorganisme))
router.delete('/deletorganisme/:id',userPermission, tryCatch(deletorganisme))
router.put('/updateorganisme/:id', userPermission,userPermission,tryCatch(updateorganisme))
router.get('/getOrganisme', userPermission, tryCatch(getOrganisme))



router.use(errorHandler)

module.exports = router
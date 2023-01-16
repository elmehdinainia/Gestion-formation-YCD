const router = require('express').Router()
const {tryCatch} =require('../../middlewares/tryCatch')
const {addemploye,getemploye, getFormation} = require('../../controllers/usersControllers/employeControllers')
const {errorHandler} = require('../../middlewares/errorHandler')
const {  userPermission  }  = require('../../middlewares/permission')



router.get('/getemploye',userPermission,tryCatch(getemploye))
router.get('/formation',userPermission,tryCatch(getFormation))



router.use(errorHandler)

module.exports = router
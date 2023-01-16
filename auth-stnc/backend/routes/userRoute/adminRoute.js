const router = require('express').Router()
const {tryCatch} =require('../../middlewares/tryCatch')
const {editemploye,addemploye,deleteemploye,statistique} = require('../../controllers/usersControllers/adminController')
const {errorHandler} = require('../../middlewares/errorHandler')
const {  userPermission  }  = require('../../middlewares/permission')



router.put('/editemploye/:id',userPermission, tryCatch(editemploye))
router.post('/addemploye',userPermission, tryCatch(addemploye))
router.delete('/deleteemploye/:id',userPermission, tryCatch(deleteemploye))
router.get('/statistique',userPermission, tryCatch(statistique))



// router.get('/getemploye', tryCatch(getemploye))



router.use(errorHandler)

module.exports = router
const router = require('express').Router()
const {tryCatch} =require('../../middlewares/tryCatch')
const {editemploye,addemploye,deleteemploye} = require('../../controllers/usersControllers/adminController')
const {errorHandler} = require('../../middlewares/errorHandler')


router.put('/editemploye/:id', tryCatch(editemploye))
router.post('/addemploye', tryCatch(addemploye))
router.delete('/deleteemploye/:id', tryCatch(deleteemploye))


// router.get('/getemploye', tryCatch(getemploye))



router.use(errorHandler)

module.exports = router
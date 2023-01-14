const router = require('express').Router()
const {tryCatch} =require('../../middlewares/tryCatch')
const {addemploye,getemploye} = require('../../controllers/usersControllers/employeControllers')
const {errorHandler} = require('../../middlewares/errorHandler')


router.get('/getemploye', tryCatch(getemploye))



router.use(errorHandler)

module.exports = router
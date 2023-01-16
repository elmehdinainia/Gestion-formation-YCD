const router = require('express').Router()

const {login,register} = require('../controllers/authControllers')
const {tryCatch} =require('../../backend/middlewares/tryCatch')
const {errorHandler} = require('../middlewares/errorHandler')


// const {  authParemission }  = require('../middlewares/permission')
    





router.post('/login', tryCatch(login))
router.post('/register',tryCatch(register))
router.use(errorHandler)

module.exports = router
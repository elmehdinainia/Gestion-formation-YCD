const router = require('express').Router()

const {addorganisme,deletorganisme,updateorganisme,getOrganisme} = require('../../controllers/usersControllers/organismeController')
const {tryCatch} =require('../../middlewares/tryCatch')
const {errorHandler} = require('../../middlewares/errorHandler')

router.post('/addorganisme', tryCatch(addorganisme))
router.delete('/deletorganisme/:id', tryCatch(deletorganisme))
router.put('/updateorganisme/:id', tryCatch(updateorganisme))
router.get('/getOrganisme',  tryCatch(getOrganisme))



router.use(errorHandler)

module.exports = router
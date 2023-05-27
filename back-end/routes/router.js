const {Router} =require('express')
const {sendMessage, getMessages} = require('../controllers/MessageController')

const router = Router()


router.post('/sendmessage', sendMessage)
router.get('/getmessages', getMessages)

module.exports = router
// ts files ela export cheyalo try chey ledante js use cheddam first js lo chese neu convet chesukuts okkkkkkk
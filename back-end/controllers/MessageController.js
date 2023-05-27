const {messageSchema} = require('../models/MessageModel')

const sendMessage = async (req,res)=> {
    console.log('Req.body', req.body)
    const sampleObj = {name: 'Jagadeesh', content:'Hii', }
    const result = await messageSchema.create(req.body).then(data => console.log('DATA',data)).catch(e=> console.log('ERR',e))
    console.log('RESULT', result)
    res.status(200).json(`Message Sent ${JSON.stringify(req.body)}`)
}
// ela mankai enni kavali ante anni calls  create chesukovlaaaaa........
// yes broh 
const getMessages = async (req,res) => {
    console.log('Get Call')
    const data = await messageSchema.find({})
    res.status(200).json(data)
}
module.exports={ sendMessage, getMessages}

// data ravatle broh  haa check chest a wait  broh
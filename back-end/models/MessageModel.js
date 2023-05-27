const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    content: {
        type:String,
        require: true
    },
},{timestamps: true})
module.exports.messageSchema = mongoose.model('message', messageSchema)
// ikkada model tarvatha ae name isthe ah name tho mnaki db lo oka collection la store ithai
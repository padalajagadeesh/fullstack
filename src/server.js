var app = require('express')();
var http = require('http')
var io = require('socket.io')(http);
var cors = require('cors');
const { Server } = require('socket.io')
const server = http.createServer(app)
app.get('/', cors(), (req, res) => res.send('this is working'));
app.use(cors())

server.listen(3000, () => {
    console.log('listen 3000');
})

const oi = new Server(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
})
oi.on('connection',async(socket)=>{
    console.log('socket is connected',socket.id)
    socket.on('user-data', async (value) => {
                //let members = await AboutComponent(value)
               // io.emit('user-data', members)
                console.log(value,'88')
                 console.log( oi.emit('recice-msg',value))
            })
})
// oi.on('connection', async (socket) => {
//     console.log('connected&*&', socket.id)
//     socket.on('new-user', async () => {
//         const members = await signUpModel.find()
//         io.emit('new-user', members)
//     })

     
//     socket.on('new-user', async (data) => {
//             console.log(data,'77')
//             if(data){
//                 console.log('0000000000')
//               }
//             io.emit('new-user', data)
//         })
      
      
//     socket.on('join-room', async (room, previousRoom) => {
//         socket.join(room)
//         socket.leave(previousRoom)
//         let roomMessages = await getLastMessagesFromRoom(room)
//         roomMessages = sortRoomMessagesByDate(roomMessages)
//         socket.emit('room-messages', roomMessages)
//     })

    //////////////
    // socket.on('message-room', async (room, content, sender, time, date, opponentId) => {
    //     const newMessage = await Message.create({ to: room, content, from: sender, time, date })
    //     let roomMessages = await getLastMessagesFromRoom(room)
    //     roomMessages = sortRoomMessagesByDate(roomMessages)
    //     io.to(room).emit('room-messages', roomMessages)
    //     socket.emit('notifications', room, opponentId, sender)
    // })

    ///////////
    // socket.on('AssignTicket', (val, id, sender) => {
    //     console.log('vall', val)
    //     socket.broadcast.emit('ticketAssigned', val, id, sender)
    // })
// })
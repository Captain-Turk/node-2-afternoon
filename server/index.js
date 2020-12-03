const express = require('express')
const msgCtrl = require('./controllers/messages_controller')
const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build')) 

// Alternative way but no need in here
// const messagesBaseUrl = '/api/messages' eg:`${messagesBaseUrl}/:user_id`

app.get('/api/messages', msgCtrl.read)
app.post('/api/messages', msgCtrl.create)
app.put('/api/messages/:message_id', msgCtrl.update)
app.delete('/api/messages/:message_id', msgCtrl.delete)



app.listen(SERVER_PORT,()=> console.log(`Server listining on port ${SERVER_PORT}`))
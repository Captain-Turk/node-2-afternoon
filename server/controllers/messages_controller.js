let messages = []
let id = 0


module.exports = {
    //Post Request
    create: (req,res) => {
        const {text, time} = req.body

        const newMessage ={
            id,
            text,
            time,
        }

        messages.push(newMessage)

        id++

        res.status(200).send(messages)
        
    },

    //Get Request
    read: (req,res) => {
        res.status(200).send(messages)

    },

    //Put Request
    update: (req,res) => {
        const {message_id} = req.params
        const {text} = req.body

        const index = messages.findIndex((element) => element.id === +message_id)
        
        if (index === -1) {
            return res.status(404).send('Message does not exist') 
        }

        const existingMessage = messages[index]
        
        messages[index] = {
            id: existingMessage.id,
            text: text || existingMessage.text,
            time: existingMessage.time
        }

        res.status(200).send(messages)

    },

    //Delete Request
    delete: (req,res) => {
        const {message_id} = req.params

        const index = messages.findIndex((element) => element.id === +message_id)
        
        if (index === -1) {
            return res.status(404).send('Message does not exist') 
        }

        messages.splice(index, 1)

        res.status(200).send(messages)




    }    
   
    
    
   

}    


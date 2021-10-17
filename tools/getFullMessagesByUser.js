import getMessageByID from "./getMessageByID.js"
// Gets all messages full object representations per user -- Warning: expensive for large users with thousands of messages
export default function getFullMessagesByUser(user,room){
    if(room != null) {
        if(user == null) return null
        if(user.messages) var messages = user.messages
        else return null
        messages = messages.map(function(message){
            return getMessageByID(message.id,room)
        })
        return messages
    }else{
        return null
    }
}
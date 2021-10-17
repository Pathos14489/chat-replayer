export default function getMessageByID(id,room){
    if(room != null) {
        var messages = room.messages
        return messages.find(function(message){
            return message.id == id
        })
    }else{
        return null
    }
}
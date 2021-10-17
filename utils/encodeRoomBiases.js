import { encodeRoomBiases } from "../tools/roomBiasEncoder.js";
import fs from "fs";

var dir = "./rooms/";
var files = fs.readdirSync(dir);
var f = true
files.forEach(file => {
    var room = JSON.parse(fs.readFileSync(dir + file));
    room.messages = room.messages.map(message=>{
        message.body = message.body.replace(/&quot;/g, `"`);
        return message;
    })
    if (!room.biases || f == true) {
        var biases = encodeRoomBiases(room);
        biases = biases.filter(b => b != null);
        biases = biases.sort((a, b) => a.bias - b.bias);
        room.biases = biases;
        room.users = room.users.filter(u => u != null);
        fs.writeFileSync(dir + file, JSON.stringify(room, null, 2));
    }
});
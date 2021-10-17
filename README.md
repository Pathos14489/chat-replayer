# chat-replayer
Here's a quick project I threw together over a few days to replay chatlogs. I have some rooms I made from old brony chat data from Fillydelphia as concepts for how this works. Have fun.

Sorry if it's badly made, I wanted to make it, not make it perfectly.

# How To Use

Just download the html file, and open in your browser. If you just wanna browse a history, pick a room, unzip the json, load it, and you're off to the races. If you want to use NovelAI, then open the network tab of your browser inspector on NAI and make a generation request, then read through the "Headers" and find the Authorization header. Copy-paste the string of nonsense after the word "Bearer " and you're good to go for AI generation. It currently uses the Room 1 module for all generations, but that's not intended forever. I'm intending to update the Room files to include an option for custom modules per room. But this is still usable so. Yeah.

# Biases

I've tried a sort of automatic bias encoding, but it's not exactly what I'd call great. It was an interesting experiment and I might fool around with it more later. I think having the biases be dated and based on 6-month periods instead of the entire history might be more accurate, but I digress. If you wanna try it out, just toggle the experimental variable to true in the main script. Some Users are a little crazy with it enabled though, you've been warned.

Also I've temporarily removed the other rooms because I have to update them.

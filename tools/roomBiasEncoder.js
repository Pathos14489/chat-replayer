import fs from 'fs';
import tokenizer from "gpt-3-encoder"
import getFullMessagesByUser from './getFullMessagesByUser.js';

export const commonWords = ["iona","shouldn't","shouldnt","making","news","hey","looking","to","the","she","a","you","shrug","shrugs","wave","waves","take","takes","hugs","softly","beside","besides","raise","raises","quickly","doing","do","shakes","shake","skate","tilts","tilt","rolls","kinda","lifts","lift","mostly","trying","wouldn't","wouldnt","decided","sighs","sigh","tries","try","another","already","softly","thinks","think","thinking","heads","narrow","narrows","isn't","Isn't","isnt","into","follow","follows","can't","going","anything","blinks","hoof","being","really","doesn't","blink","blinks","blinks.","smiles","smiles.","smile","goes","settles","probably","I've","ive","i've","Ive","seems","he'd","hed","along","actually","admit","admit.","remarks","remark","nod","nods","chuckle","chuckles","because","eyes","youre","you're","your","you","stuff","something","leaves","its","it's","It's","around","leans","looks","don't","dont","I","i","im","I'm","i'm","IM","\"IM","\"im","\"I'm","\"i'm","the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"].map(word => word.toLowerCase())
export const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "olive",
    "silver",
    "teal",
    "aqua",
    "alice blue",
    "antique white",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "blanche dalmond",
    "blue violet",
    "brown",
    "burly wood",
    "cadet blue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflower blue",
    "cornsilk",
    "crimson",
]
export const colorPrefixes = [
    "light",
    "medium",
    "dark",
    "very dark",
    "very light",
    "pale",
    "pastel",
    "soft",
    "warm",
    "cold",
    "cool",
    "muted",
    "dull"
]
export const colorableParts = [
    "eyes",
    "hair",
    "skin",
    "shirt",
    "pants",
    "shoes",
    "hat",
    "glasses",
    "earrings",
    "necklace",
    "bracelets",
    "ring",
    "scarf",
    "socks",
    "trousers",
    "shorts",
    "skirt",
    "dress",
    "blouse",
    "vest",
    "jacket",
    "coat",
    "t-shirt",
    "sweater",
    "sweatshirt",
    "cardigan",
    "coat",
    "jumper",
    "mane",
    "tail",
]

export function encodeRoomBiases(room){
    var WORDS = []
    WORDS = WORDS.concat(commonWords)
    var WORDS2 = colorPrefixes.map(function(prefix){
        return colors.map(function(color){
            return prefix +" "+ color
        })
    })
    WORDS2 = WORDS2.reduce(function(a,b){
        return a.concat(b)
    })
    var WORDS3 = []
    WORDS3 = WORDS2.map(function(word){
        return colorableParts.map(function(part){
            return word +" "+ part
        })
    })
    WORDS3 = WORDS3.reduce(function(a,b){
        return a.concat(b)
    })
    WORDS2 = WORDS2.concat(WORDS3)
    var names = room.users.map(user => user != null?user.name:null)
    names = names.filter(name => name != null)
    var nameParts = names.map(name => name.split(" "))
    nameParts = nameParts.reduce(function(a,b){
        return a.concat(b)
    })
    var nameParts2 = nameParts.map(function(part){
        return part.split("-")
    })
    nameParts2 = nameParts2.reduce(function(a,b){
        return a.concat(b)
    })
    var nameParts3 = nameParts2.map(function(part){
        return part.split("'")
    })
    // Detects CamalCase as new words
    var nameParts4 = nameParts3.map(function(part){
        return part.map(function(word){
            return word.split(/(?=[A-Z])/)
        })
    })
    nameParts4 = nameParts4.reduce(function(a,b){
        return a.concat(b)
    })
    // flatten again
    nameParts4 = nameParts4.reduce(function(a,b){
        return a.concat(b)
    })
    console.log(nameParts4);

    // Cleans up the name parts
    // removes spaces
    nameParts = nameParts4.map(part => part.replace(/\s/g, ""))
    // removes non-alphanumeric characters
    nameParts = nameParts.map(part => part.replace(/[^a-zA-Z0-9]/g, ""))
    // removes empty strings
    nameParts = nameParts.filter(part => part != "")
    // removes duplicates
    nameParts = nameParts.filter((part, index, self) => self.indexOf(part) === index)
    // removes words that are too short
    nameParts = nameParts.filter(part => part.length > 2)
    // removes words that are too common
    nameParts = nameParts.filter(part => WORDS.indexOf(part) == -1)


    console.log(nameParts);
    
    WORDS = WORDS.concat(nameParts)
    WORDS = WORDS.map(word => word.toLowerCase())

    names = names.filter(name => !commonWords.includes(name))
    WORDS2 = WORDS2.concat(names)


    var biases = room.users.map(user => {
        var wordList = []
        var wordCount = {}
        var words = []
        if(user == null) return
        var messages = getFullMessagesByUser(user,room)
        if(messages == null) return

        // Finds all strings parts that are like "I am X"
        var iAms = messages.map(message => {
            if(message.body.includes("I am ")) return r(message,"I am")
            if(message.body.includes("I'm ")) return r(message,"I'm")
            if(message.body.includes("i am ")) return r(message,"i am")
            if(message.body.includes("i'm ")) return r(message,"i'm")
            if(message.body.includes("Im ")) return r(message,"Im")
            return null
            function r(m,t){
                var next = m.body.split(t)[1]
                next = next.slice(1)
                var nextWord = next.split(" ")[0]
                // next word blacklist
                var blacklist = [
                    "around",
                    "licking",
                    "holding",
                    "gonna",
                ]
                // next word greylist -- If the next word is in this list, it is considered a filler word and is ignored
                var greylist = [
                    "rather",
                    "a",
                    "just"
                ]
                if(greylist.includes(nextWord)) next = next.split(" ")[1]
                console.log(m,`"${next}"`,`"${nextWord}"`,greylist.includes(nextWord),blacklist.includes(nextWord));
                if(!blacklist.includes(nextWord)) {
                    // Checks if the next grammar mark is a question mark
                    var nextGrammar = next.match(/[.!]/g)
                    if(nextGrammar != null && nextGrammar.length > 0) nextGrammar = nextGrammar[0]
                    else nextGrammar = ""
                    console.log(nextGrammar);
                    if(nextGrammar != "?") {
                        return m
                    }
                }
                else return null
            }
        })
        iAms = iAms.filter(iAm => iAm != null)
        console.log(iAms);
        console.log(`Encoding Biases for ${user.name}...`);
        // messages.forEach(message => {
        //     // Message contains a phrase from WORDS2
        //     var check = WORDS2.some(word => message.body.includes(word))
        //     if(check){
        //         // Gets the phrase
        //         var included = []
        //         WORDS2.forEach(word => {
        //             if(message.body.includes(word)){
        //                 included.push(word)
        //             }
        //         })
        //         included.forEach(phrase=>{
        //             var tokens = tokenizer.encode(phrase)
        //             var string = phrase
        //             //Anything that's not a normal character is removed
        //             string = string.replace(/&quot;/g, "")
        //             string = string.replace(/[^a-zA-Z0-9']/g, "")
        //             if(wordCount[string]){
        //                 wordCount[string] += 1
        //             }else{
        //                 wordCount[string] = 1
        //             }
        //         })
        //     }
        // })
        messages = messages.map(function(message){
            return message.body.split(" ")
        })
        // Gets the count of each word in the user's messages
        messages.forEach(function(message){
            message.forEach(function(word){
                if(wordCount[word]){
                    wordCount[word] += 1
                }else{
                    wordCount[word] = 1
                }
            })
        })
        // converts the word count to a list of objects
        for(var word in wordCount){
            if(wordCount[word] > 10){
                if(word.length > 0){
                    var string = word.toLowerCase()
                    var safe = word
                    //Anything that's not a normal character is removed
                    string = string.replace(/&quot;/g, "")
                    string = string.replace(/[^a-zA-Z0-9']/g, "")
                    safe = safe.replace(/&quot;/g, "")
                    safe = safe.replace(/[^a-zA-Z0-9']/g, "")
                    if(string.length < 1){
                        continue
                    }else{
                        if(string == "constructor"){
                            var tokens = [
                                41571,273
                            ]
                        }else{
                            var tokens = tokenizer.encode(safe)
                        }
                        if(!WORDS.includes(string)) wordList.push({word: word, string, safe, count: wordCount[word], tokens})
                    }
                }
            }
        }
        // sorts the word list by count
        wordList.sort(function(a, b){
            return b.count - a.count
        })
        // Bias Example
        // {
        //     "bias": word,
        //     "ensure_sequence_finish": false,
        //     "generate_once": false,
        //     "sequence": [
        //         198
        //     ]
        // }
        // Converts the word list to a bias list
        var biasList = wordList.map(function(word){
            if(wordCount[word]<6) return
            var count = word.count
            var div = 250
            if(count > 250) {
                div = count + 250
            }
            if(count > 500) {
                div = count + 1000
            }
            if(count > 1000) {
                div = count + 2000
            }
            if(parseInt(count)/div > 1){
                console.log(count,word,parseInt(count)/div);
            }
            while(parseInt(count)/div > ((2+Math.ceil(Math.random()*8))/10)){
                div = div+100
            }
            return {
                bias: parseInt(count)/div,
                ensure_sequence_finish: false,
                generate_once: false,
                sequence: word.tokens
            }
        })
        biasList = biasList.filter(function(bias){
            return bias.sequence.length > 0
        })
        biasList = biasList.filter(function(bias){
            return bias != null
        })
        wordList = wordList.filter(function(word){
            return word != null
        })
        var max = 500
        var top = 300
        var other = 200
        // If over 1000 biases, get top 600 then a random spread of the rest of the biases up to 400
        if(biasList.length > max){
            var top = biasList.slice(0,top)
            var rest = biasList.slice(top)
            // gets other random biases from the rest
            var rand = []
            for(var i = 0; i < other; i++){
                var index = Math.floor(Math.random()*rest.length)
                rand.push(rest[index])
                rest.splice(index,1)
            }
            biasList = top.concat(rand)
        }
        if(user.id == 69 || user.id == 4){
            console.log({
                user: user.id,
                stats: wordList,
                biases: biasList
            });
            // writes to file
            fs.writeFileSync(`./biases/${user.id}.json`,JSON.stringify({
                user: user.id,
                stats: wordList,
                biases: biasList
            },null,2))
        }
        return {
            user: user.id,
            stats: wordList,
            biases: biasList
        }
    });
    return biases
}
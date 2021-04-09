const game = require('../Schema/Game');
const player = require('../Schema/player');
const decks = require('../commands/cardNames');
const getNextSequence = require('./getNextsequence')getNextSequence;

module.exports = {
	name: 'game',
	description: 'the rules for the PBP game',
	public: false, //has to be true to show as a command
	async execute(msg, args, mongoose) {
		await msg.channel.send('output of command');
        
        let newGameData;
        try {
            newGameData = await game.findOne({channelID: msg.channelID});
            ///getNextSequence(name, bd)
        } catch(err){
            console.log(err);
        }

        switch(args[0]){
            case 'new': 

                if (!newGameData) {
                    let name;
                    if (args.length < 1){
                        name = args.shift();
                    }else{
                    console.log("Game Must have a Name. game new [name]")
                    return;
                    }

                    var num = getNextSequence(name, mongoose);

                    let newGame =  await mongoose.create({
                    
                        gameName: name,
                        serverID: msg.serverID,
                        channelID: msg.channelID,
                        minorDeck: decks.minor , 
                        minorDeck: decks.major ,

                        fear: decks.fear,


                    })
                }
             

            break;
            case 'close':

            break;
            case 'timePasses':


            break;
            case 'forget':    
    
            break;
            case 'hand':
            
            break;
            case 'play':

            break;
            case 'discard':
	    }
    }
};




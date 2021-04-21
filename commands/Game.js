const newGame = require('./newGame.js');
//const player = require('../Schema/player');


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

                    newGame(msg, args, mongoose, newGameData)
             
                }else{
                    msg.channel.send("The Channel already has a game. Only one game per channel");
                    return;
            
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




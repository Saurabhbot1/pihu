const fs = require("fs");
module.exports.config = {
	name: "priyansh",
  version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "priyansh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) 

	var { threadID, messageID } = event;
	if (event.body.indexOf("@Priyanshi Kaur")==0 || event.body.indexOf("Priyanshi Kaur")==0 || event.body.indexOf("Priyanshi")==0 || event.body.indexOf("Pihu")==0) {
		var msg = {
				body: "Prîyanshi ✨💖🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/Priyansh.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
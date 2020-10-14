const alexa = require('alexa-bot-api');
const ai = new alexa("aw2plm")

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if (message.channel.id === "762919514995556382") { 
      let bacotan = message.content
      console.log(bacotan)
      ai.getReply(bacotan).then(r => message.channel.send(r)); 
      } 
}
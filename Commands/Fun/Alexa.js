const alexa = require('alexa-bot-api');
const ai = new alexa("aw2plm")
module.exports = {
    name: 'alexa',
    description: 'ngomong dengan alexa',
    run: async(bot, message, args) => {
        const bacotan = args.join(" ")

        console.log(bacotan)
        ai.getReply(bacotan).then(reply => message.channel.send(reply))
    }
}
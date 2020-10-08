const alexa = require('alexa-bot-api');
const ai = new alexa("aw2plm")
const { prefix } = require('../../config.json')

module.exports = {
    name: 'alexa',
    description: 'ngomong dengan alexa',
    usage: `${prefix}alexa (Perkataan Yang Ingin Di Katakan)`,
    run: async(bot, message, args) => {
        const bacotan = args.join(" ")

        console.log(bacotan)
        ai.getReply(bacotan).then(reply => message.channel.send(reply))
    }
}
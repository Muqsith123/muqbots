const talkedRecently = new Set();

module.exports = async(bot, message) => {
    if(message.author.bot) return;
    if(message.content.includes(`<@!${bot.user.id}>`)) {

        if (talkedRecently.has(message.author.id)) {
            message.channel.send("<a:pong:763015760981131265>");
            message.reply('Tag Aja Teros !')
    } else {
        message.channel.send('Hello My Prefix Is `-help`. Use `-help` for show list of the command')
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
        
        
    }
}
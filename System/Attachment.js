module.exports = async(bot, message) => {
  if(message.author.bot) return;
  if (message.attachments.size > 0) {
        message.attachments.forEach(Attachment => {
            console.log(`Attachment sent by ${message.author.tag} >> Url: ${Attachment.url}`)
        })
    }
}
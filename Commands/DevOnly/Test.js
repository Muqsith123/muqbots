module.exports = {
    name: 'test',
    description: 'BRUH',
    run: async(bot, message) => {
        message.reply('masukkan anjay')
        if(message.content === 'anjay')  return message.reply('work')
    }
}
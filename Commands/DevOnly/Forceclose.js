module.exports = {
  name: 'forceclose',
  description: 'Stop Your Bot Process !',
  ownerOnly: true,
  run: async(bot, message) => {
    await message.channel.send('Goodbye !');
    return process.kill(1);
  }
}
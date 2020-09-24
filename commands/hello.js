module.exports = {
  name: 'hello',
  description: 'Ucapkan Hai !',
  execute(message) {
   message.channel.send("Hai !");
  }
}
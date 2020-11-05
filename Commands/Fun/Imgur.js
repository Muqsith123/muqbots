const fetch = require('node-fetch');

module.exports = {
  name: 'imgur',
  description: 'Search Image With Google Images !',
  category: 'Fun',
  run: async(bot, message, args) => {
    let query = args.join(" ");
    if(!query) return message.channel.send('Please Input The Query !');

    const url = `https://api.imgur.com/3/gallery/search/top/1/?q=${query}`
    const api = process.env.IMGUR;

    fetch(url, {headers: {Authorization: `Client-ID ${api}`}})
    .then(res => res.json())
    .then(json => console.log(json))


  }
}
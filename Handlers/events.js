const fs = require('fs');

module.exports=(bot)=> {
    fs.readdir("./Events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          const event = require(`./../Events/${file}`);
          let eventName = file.split(".")[0];
          bot.on(eventName, event.bind(null, bot));
        });
      });
      
};
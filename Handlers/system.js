const fs = require('fs');

module.exports = (bot) => {
    fs.readdir("./System/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const core = require(`../System/${file}`)
            bot.on("message", core.bind(null, bot))
        });
    })
}
const fs = require('fs');

module.exports = (bot) => {
    fs.readdir("./Core/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const core = require(`../Core/${file}`)
            bot.on("message", core.bind(null, bot))
        });
    })
}
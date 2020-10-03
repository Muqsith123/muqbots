const { readdirSync } = require('fs');
const asciitable = require('ascii-table');

let table = new asciitable("Commands")
table.setHeading('Commands', 'Load Status')

module.exports = (bot)=>{
    readdirSync('./Commands/').forEach(dir=>{
        const commands = readdirSync(`./Commands/${dir}`).filter(file=>file.endsWith('js'))
        for(let file of commands) {
            let pull = require(`../Commands/${dir}/${file}`)
            if(pull.name) {
                bot.commands.set(pull.name, pull)
                table.addRow(file, '✔️')
            } else {
                table.addRow(file, '❌ -> Terjadi Kesalahan')
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}
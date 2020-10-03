const { endsWith } = require('ffmpeg-static');
const { readdirSync } = require('fs');

module.exports=(bot)=> {
    const load = dirs =>{
        const events = readdirSync(`./Events/${dirs}/`).filter(d=>d.endsWith('.js'));
        for (let file of events){
            const evt = require(`../Events/${dirs}/${file}`);
            let eName = file.split('.')[0];
            bot.on(eName,evt.bind(null,bot));
        };
    };
    ['client', 'guild'].forEach(x=>load(x));
};
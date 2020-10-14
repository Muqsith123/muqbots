module.exports = {
    name: 'badword',
    description: 'Mengatur Pengaturan Badword',
    category: 'DevOnly',
    run: async(bot, message) => {
        const sys = require('../../sc/settings.json')
        
        if(!sys.badword) { 
            message.reply('Sukses Menyalakan !')
            sys.badword = true;
            return;
        } else if (sys.badword) {
            message.reply('Sukses Mematikan !')
            sys.badword = false;
            return;
        }
    }
}
const Event = require('../Structures/Event');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            once: true
        });
    }

    run(member) {
        let stats = {
            serverID: '730009536869433384',
            total: '751316105980805223',
            member: '751316106765008987',
            bots: '751316107570446406'
          }

          if(member.guild.id !== stats.serverID) return;
              this.client.channels.cache.get(stats.total).setName(`Total Pengguna: ${member.guild.memberCount}`);
              this.client.channels.cache.get(stats.member).setName(`FAM: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
              this.client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    }
}
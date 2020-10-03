const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = {
    name: 'server',
    category: 'Info',
    description: 'Melihat Informasi Server !',
    run: async(bot, message)=> {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()
			.setDescription(`**Guild information for __${message.guild.name}__**`)
			.setColor('#00f1ff')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('Utama', [
				`**❯ Nama Server:** ${message.guild.name}`,
				`**❯ ID:** ${message.guild.id}`,
				`**❯ Pemilik:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
				`**❯ Lokasi Server:** ${regions[message.guild.region]}`,
				`**❯ Level Boost:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`**❯ Filter Eksplisit:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`**❯ Level Verfikasi:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**❯ Waktu Di Buat:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.addField('Statistik', [
				`**❯ Jumlah Role:** ${roles.length}`,
				`**❯ Jumlah Emoji:** ${emojis.size}`,
				`**❯ Jumlah Emoji Non Gerak:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**❯ Jumlah Emoji Bergerak:** ${emojis.filter(emoji => emoji.animated).size}`,
				`**❯ Jumlah Member:** ${message.guild.memberCount}`,
				`**❯ Jumlah Manusia:** ${members.filter(member => !member.user.bot).size}`,
				`**❯ Jumlah BOT:** ${members.filter(member => member.user.bot).size}`,
				`**❯ Jumlah Text Channel:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**❯ Jumlah Voice Channel:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**❯ Jumlah Boost:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
			])
			.addField('Status Member', [
				`**❯ Jumlah Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**❯ Jumlah Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**❯ Jumlah DND** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**❯ Jumlah Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
			.setTimestamp();
		message.channel.send(embed);
	}

};
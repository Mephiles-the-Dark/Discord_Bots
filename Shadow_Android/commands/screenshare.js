module.exports = (client, msg, args) => {
  if (!msg.guild) return msg.reply('[screenshare] is a guild only command.');// Voice only works in guilds, if the message does not come from a guild, we ignore it
	if (msg.member.voiceChannel) {
		msg.reply(`Here is the link for screenshare, please use the link when you are in the voice channel.  <https://discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannel.id}>`)
	} else {
		msg.reply('You need to join a voice channel first !');
	}
};

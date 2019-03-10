module.exports = async (client, msg, args) => {
    if(msg.member.hasPermission('MANAGE_MESSAGES') || msg.mentions.users.first().id === client.user.id || msg.mentions.users.first().id === msg.author.id) {
        const user = msg.mentions.users.first()
        const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
	if (!amount || (amount < 0)) return msg.reply('Must specify an amount to delete!')
	if (!amount && !user) return msg.reply('Must specify a user and amount, or just an amount, of messages to purge!')
	msg.delete().then(
	    msg.channel.fetchMessages({
                limit: amount,
	    }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : Client.user.id;
		    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount)
                }
                msg.channel.bulkDelete(messages)
                   .catch(error => msg.reply(`Could not delete messages because of: ${error}.`))
            })
	)
    } else {
        msg.reply('You do not have the MANAGE_MESSAGES permission.');
    }
}

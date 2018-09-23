module.exports = (client, msg, args) => {
  if (!msg.guild.me.hasPermission('CHANGE_NICKNAME') || !msg.guild.me.hasPermission('MANAGE_NICKNAMES') || !msg.guild.me.hasPermission('ADMINISTRATOR')) return msg.channel.send('I do not have permission to change my nickname.')
  msg.guild.me.setNickname(args.join(' '))
    .then(me => console.log(`My new username is ${me.nickname}`))
    .catch(console.error)
}

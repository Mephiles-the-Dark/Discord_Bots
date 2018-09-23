module.exports = (client, msg, args) => {
  const saymsg = args.join(' ')
  if (msg.guild.me.hasPermission('MANAGE_MESSAGES') || !msg.guild.me.hasPermission('ADMINISTRATOR')) {
    msg.delete().catch(console.error)
  }
  if (saymsg === '') {
    msg.channel.send('There is only space after [say].')
      .then((meg) => {
        meg.delete(5000)
      }).catch(console.error)
    return
  }
  console.log(saymsg)
  msg.channel.send(saymsg).catch(console.error)
}

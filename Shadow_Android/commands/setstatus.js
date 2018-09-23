module.exports = (client, msg, args) => {
  let status = args.toString().toLowerCase().trim()
  if (status === 'online' || status === 'idle' || status === 'dnd' || status === 'invisible') {
    client.user.setStatus(status).then(user => console.log(user.presence.status)).catch(console.error)
  } else {
    msg.channel.send('Accepted values for this command are `online`, `idle`, `dnd`, and `invisible`.')
  }
}

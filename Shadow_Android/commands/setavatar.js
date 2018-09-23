module.exports = (client, msg, args) => {
  let k = -1
  if (args.length > 0) {
    let j = -1
    for (let i = 0; i < args.length; i++) {
      if (args[i].startsWith('<https')) args[i] = args[i].slice(1).slice(0, -1)
      if (args[i].startsWith('https')) {
        j = i
        k = 1
      }
    }
    console.log(j)
    if (j < 0) return msg.channel.send('Invalid arguement.')
    client.user.setAvatar(args[j])
      .then(user => console.log('New avatar set !'))
      .catch(console.error)
  }
  if (k < 0) {
    if (msg.attachments.first()) {
      client.user.setAvatar(msg.attachments.first().url)
        .then(user => console.log('New avatar set !'))
        .catch(console.error)
    } else {
      msg.channel.send('There was no suitable avatar given.')
    }
  }
}

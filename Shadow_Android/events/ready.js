module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag} (${client.user.id}).`)
  console.log(`With ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guild(s).`)
  // resetting below
  client.user.setPresence({
    status: 'online',
    game: {
      name: 'Ёж Шэ́доу (2005)',
      type: 0
    }
  }).catch(console.error)
  if (client.user.username !== '<Bot_Username>') {
    client.user.setUsername('<Bot_Username>')
      .then(user => console.log('Old username set !'))
      .catch(console.error)
  }
  if (client.user.avatarURL !== '<Standard avatar given by client.user.avatarURL>') {
    client.user.setAvatar('<Link to standard avatar>')
      .then(user => console.log(`Old avatar set !`))
      .catch(console.error)
  }
}

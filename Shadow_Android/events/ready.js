const presence = require("../presence.json")
module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag} (${client.user.id}).`)
  console.log(`With ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guild(s).`)
  // resetting below
  client.user.setPresence({
      status: presence.status,
      game: {
        name: presence.name,
        type: presence.type,
        url: presence.url
    }
  }).catch(console.error)
}

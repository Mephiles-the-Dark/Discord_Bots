module.exports = (bot) => {
  console.log(`Logged in as ${bot.user.tag} (${bot.user.id}).`)
  console.log(`With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guild(s).`)
  android.user.setPresence({
    status: 'online',
    game: {
      name: 'Ёж Шэ́доу (2005)',
      type: 0
    }
  })
}

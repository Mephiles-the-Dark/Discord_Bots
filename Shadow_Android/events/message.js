const config = require('../config.json')
// required for events
module.exports = async (bot, msg) => {
  if (msg.author.bot) return
  if (msg.guild) {
    if (!msg.guild.available) return
  }
  let prefix = false
  for (const preficks of config.prefixes) {
    if (msg.content.startsWith(preficks)) {
      prefix = preficks
    }
  }
  if (!prefix) return
  if (prefix === prefixes[1] || prefix === prefixes[2]) {
    if (msg.content.length > (bot.user.tag.toString().length + 4) || msg.content.length > 21) {
      // The 21 is the length of the mention by identifier (prefixes[1]).
      if (msg.content.split(/ +/g).some(than)) {
        return msg.reply('do not mention it.')
      }
    }
    return msg.reply(`Prefix is ${config.prefixes[0]}, use: \`${config.prefixes[0]}help\`.`)
  }
  let args = msg.content.slice(prefix.length).trim().split(/ +/g)
  let cmd = args.shift().toLowerCase()
  // Adds a reaction to get emojis put a forward slash, \, before it.
  if (msg.guild) {
    if (msg.guild.me.hasPermission('ADD_REACTIONS')) {
      if (args.some(faker)) {
        await msg.react('🇫')
        await msg.react('🇦')
        await msg.react('🇰')
        await msg.react('🇪')
        return msg.react('🇷')
      }
    }
  }
  // commands
  if (prefix === config.prefixes[0]) {
    if (bot.commands.has(cmd)) {
      bot.commands.get(cmd)(bot, msg, args)
    }
  }
}
// functions
function than (str) {
  var rere = /than/
  var erer = str.toLowerCase()
  return rere.test(erer)
}
function faker (str) {
  var re = /faker/
  var er = str.toLowerCase()
  return re.test(er)
}

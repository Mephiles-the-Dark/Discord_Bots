/* As a warning eval is dangerous so keep owner restricted to oneself.
It is used to test features or grab information. */
const config = require('../config.json')
const owner = config.owner
module.exports = (client, msg, args) => {
  if (msg.author.id !== owner) return
  try {
    const code = args.join(' ')
    let evaled = eval(code)
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled)
    msg.channel.send(clean(evaled), { code: 'x1' })
  } catch (err) {
    msg.channel.send(`\`ERROR\` \`\`\`x1\n$[clean(err)}\n\`\`\``)
  }
}
function clean(text) {
  if (typeof (text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  else
    return text
}

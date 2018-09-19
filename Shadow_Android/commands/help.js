// One should replace most of the code here, as it contains a lot of references to the creator and note that owner commands are not listed.
const config = require('../config.json')
module.exports = (bot, msg, args) => {
  if (!msg.author.dmChannel) {
    msg.reply('did not work')
  }
  msg.author.send({
    embed: {
      'title': 'List of Commands',
      'description': `Use ${config.prefixes[0]}[command] without the brackets.  Commands are case insensitive.`,
      'color': 4934215,
      'timestamp': '2018-09-19T01:15:36.369Z',
      'footer': {
        'icon_url': 'https://storage.googleapis.com/multi-static-content/thumbs/artage-io-thumb-d073ad938b75005ddbde8a364ceb3ca5.png',
        'text': 'Do not join my server, Кома́нда.'
      },
      'thumbnail': {
        'url': 'https://pre00.deviantart.net/960f/th/pre/f/2014/213/7/c/7c38c050279a07bf5fd7953849ff4d9d-d7t9qp0.png'
      },
      'author': {
        'name': 'Ме́филес#9198 (376086802961793024)',
        'icon_url': 'https://orig00.deviantart.net/aa81/f/2013/124/3/4/emicon_meph1_by_kidknux-d644l3s.gif'
      },
      'fields': [
        {
          'name': 'help',
          'value': 'Returns this message.'
        },
        {
          'name': 'ping',
          'value': 'Returns pong with latency.'
        }
      ]
    }
  })
}

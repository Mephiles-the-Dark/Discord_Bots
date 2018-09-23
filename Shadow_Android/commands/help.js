// Please change the timestamps, colours, and author fields in the embeds.
const config = require('../config.json')
module.exports = (client, msg, args) => {
  if (args.join(' ').toLowerCase() === 'setpresence') {
    msg.author.send({
      embed: {
        'title': 'Discord Bot Presence',
        'description': 'Use `[setpresence] [status | type | AFK | name | URL]`, where the brackets indicate that each argument is optional, but the order must be kept.  The brackets are not used in the command but the pipes, ` | `, are if more than one arguement is given.',
        'color': 14589703,
        'timestamp': '2018-09-21T01:40:32.930Z',
        'thumbnail': {
          'url': 'https://pre00.deviantart.net/960f/th/pre/f/2014/213/7/c/7c38c050279a07bf5fd7953849ff4d9d-d7t9qp0.png'
        },
        'author': {
          'name': 'Ме́филес#9198 (376086802961793024)',
          'icon_url': 'https://orig00.deviantart.net/aa81/f/2013/124/3/4/emicon_meph1_by_kidknux-d644l3s.gif'
        },
        'fields': [
          {
            'name': 'status',
            'value': 'Accepted values for this command are \`online\`, \`idle\`, \`dnd\`, and \`invisible\`.'
          },
          {
            'name': 'type',
            'value': 'Sets the line before the game name.  Note that this can be set while the bot is not playing a game.  Accepted values are `PLAYING`, `STREAMING`, `LISTENING`, and `WATCHING` and number codes in that order are `0`, `1`, `2`, and `3`. When using STREAMING or 1 as a game-type, a Uniform Resource Locator to Twitch is needed.'
          },
          {
            'name': 'AFK',
            'value': 'Sets the bot as Away From Keyboard.  Accepted values are `true` and `false`.'
          },
          {
            'name': 'name',
            'value': 'Sets the name of the game that the bot is playing.  To stop the playing message, give this field the value: `null`.'
          },
          {
            'name': 'URL',
            'value': 'Only to be given when the game-type is STREAMING or 1 and needs to be specified in the command.  The Uniform Resource Locator is a link to a Twitch channel: <https://www.twitch.tv/><username>.'
          }
        ]
      }
    }).catch(() => msg.reply('it did not work !'))
  } else {
    msg.author.send({
      embed: {
        'title': 'List of Commands',
        'description': `Use ${real.prefixes[0]}[command] without the brackets.  Commands are case insensitive.`,
        'color': 4934215,
        'timestamp': '2018-09-21T01:40:32.930Z',
        'footer': {
          'icon_url': 'https://storage.googleapis.com/multi-static-content/thumbs/artage-io-thumb-d073ad938b75005ddbde8a364ceb3ca5.png,
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
            'value': 'Returns this message.  🦔'
          },
          {
            'name': 'ping',
            'value': 'Returns pong with latency.'
          },
          {
            'name': 'say',
            'value': 'The bot posts what it was said to post and then attempts to delete the author's message.'
          },
          {
            'name': 'setavatar',
            'value': 'Sets the avatar of the bot using the first message attachment.  Rate limit for changing avatars is thrice per hour.'
          },
          {
            'name': 'setnickname',
            'value': 'Sets the nickname of the bot in the server.  To remove the nickname, leave out any arguments.'
          },
          {
            'name': 'setpresence',
            'value': 'Sets the presence of the bot.  Use `[help] setpresence` for more help.'
          },
          {
            'name': 'setstatus',
            'value': 'Sets the status of the bot.  Only values allowed are online, idle, dnd and invisible.  Usage: `[setstatus] dnd`'
          },
          {
            'name': 'setusername',
            'value': 'Sets the username of the bot.  Usernames are between 2 and 32 characters long and cannot be `here`, `everyone`, `discordtag`, only whitespace or cannot contain `#`, `@`, `:` or ```.  Rate limit is twice an hour.  Note that the tag of account must be unique so the discriminator will change if the username is changed to the same one as another account with the same discriminator.'
          }
        ]
      }
    }).catch(() => msg.reply('it did not work !'))
  }
}

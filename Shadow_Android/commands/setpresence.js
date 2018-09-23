module.exports = (client, msg, args) => {
  if (args.length === 0) return
  var gamer = args.join(' ').split('|')
  gamer = games(gamer, client, msg)
  console.log(gamer)
  if (gamer[0] === 1) {
    client.user.setStatus(gamer[1]).catch(console.error)
  } else
    if (gamer[0] === 10) {
      client.user.setPresence({ game: { type: gamer[1], name: gamer[2], url: gamer[3] } }).catch(console.error)
    } else
      if (gamer[0] === 11) {
        client.user.setPresence({ status: gamer[1], game: { type: gamer[2], name: gamer[3], url: gamer[4] } }).catch(console.error)
      } else
        if (gamer[0] === 100) {
          client.user.setPresence({ afk: gamer[1] }).catch(console.error)
        } else
          if (gamer[0] === 101) {
            client.user.setPresence({ status: gamer[1], afk: gamer[2] }).catch(console.error)
          } else
            if (gamer[0] === 110) {
              client.user.setPresence({ game: { type: gamer[1], name: gamer[3], url: gamer[4] }, afk: gamer[2] }).catch(console.error)
            } else
              if (gamer[0] === 111) {
                client.user.setPresence({ status: gamer[1], game: { type: gamer[2], name: gamer[4], url: gamer[5] }, afk: gamer[3] }).catch(console.error)
              } else
                if (gamer[0] === 1000 || gamer[0] === 1010) {
                  client.user.setPresence({ game: { type: gamer[1], name: gamer[2], url: gamer[3] } }).catch(console.error)
                } else
                  if (gamer[0] === 1001 || gamer[0] === 1011) {
                    client.user.setPresence({ status: gamer[1], game: { type: gamer[2], name: gamer[3], url: gamer[4] } }).catch(console.error)
                  } else
                    if (gamer[0] === 1100 || gamer[0] === 1110) {
                      client.user.setPresence({ afk: gamer[2], game: { type: gamer[1], name: gamer[3], url: gamer[4] } }).catch(console.error)
                    } else
                      if (gamer[0] === 1101 || gamer[0] === 1111) {
                        client.user.setPresence({ status: gamer[1], afk: gamer[3], game: { type: gamer[2], name: gamer[4], url: gamer[5] } }).catch(console.error)
                      }
}
function games (gamer, client, msg) {
  let k = 0
  let status = client.user.presence.status
  let afk = client.user.presence.afk
  let type
  let name
  let url
  let site
  if (client.user.presence.game) {
    type = client.user.presence.game.type
    name = client.user.presence.game.name
    url = client.user.presence.game.url
    site = client.user.presence.game.url
  }
  gamer[0] = gamer[0].toString().trim()
  if (gamer[0].toLowerCase() === 'online' || gamer[0].toLowerCase() === 'idle' || gamer[0].toLowerCase() === 'dnd' || gamer[0].toLowerCase() === 'invisible') {
    status = gamer.shift().toLowerCase()
    k = k + 1
  }
  if (gamer.length === 0) return [k, status]
  gamer[0] = gamer[0].toString().trim()
  if (parseInt(gamer[0], 10) === 0 || playing(gamer[0])) {
    type = 0
    gamer.shift()
    k = k + 10
  } else
    if (parseInt(gamer[0], 10) === 1 || streaming(gamer[0])) {
      if (!client.user.presence.game.streaming) {
        site = gamer.pop().toString().trim()
        if (site.startsWith('<')) {
          site = site.slice(1).slice(0, -1)
        }
        if (!site.startsWith('https://www.twitch.tv/')) {
          msg.channel.send('A Twitch Uniform Resource Locator is needed when using the "STREAMING" game-type: <https://www.twitch.tv/>')
          return [0, status, type, afk, name, url]
        }
        if (site === 'https://www.twitch.tv/') {
          msg.reply('enough of this !')
          return [0, status, type, afk, name, url]
        }
        url = site
      }
      type = 1
      gamer.shift()
      k = k + 10
    } else
      if (parseInt(gamer[0], 10) === 2 || listening(gamer[0])) {
        type = 2
        gamer.shift()
        k = k + 10
      } else
        if (parseInt(gamer[0], 10) === 3 || watching(gamer[0])) {
        type = 3
        gamer.shift()
        k = k + 10
  }
  if (gamer.length === 0) {
    if (k === 11) {
      if (!client.user.presence.game) name = undefined
      return [k, status, type, name, url]
    } else {
      if (!android.user.presence.game) name = undefined
      return [k, type, name, url]
    }
  }
  gamer[0] = gamer[0].toString().trim()
  if (gamer[0].toLowerCase() === 'true' || gamer[0].toLowerCase() === 'false') {
    afk = JSON.parse(gamer.shift())
    k = k + 100
  }
  if (gamer.length === 0) {
    if (k === 111) {
      if (!client.user.presence.game) name = undefined
      return [k, status, type, afk, name, url]
    } else
      if (k === 110) {
        if (!client.user.presence.game) name = undefined
        return [k, type, afk, name, url]
      } else
        if (k === 101) {
          return [k, status, afk]
        } else {
        return [k, afk]
        }
  }
  gamer[0] = gamer[0] + ' '
  name = gamer.join('|').toString().trim()
  if (name === 'null') {
    name = null
  }
  k = k + 1000
  if (k === 1111 || k === 1101) {
    return [k, status, type, afk, name, url]
  } else
    if (k === 1110 || k === 1100) {
      return [k, type, afk, name, url]
    } else
      if (k === 1011 || k === 1001) {
        return [k, status, type, name, url]
      } else
        if (k === 1010 || k === 1000) {
          return [k, type, name, url]
        }
}
function playing (str) {
  var re = /playing/
  var er = str.toLowerCase()
  return re.test(er)
}
function streaming (str) {
  var re = /streaming/
  var er = str.toLowerCase()
  return re.test(er)
}
function listening (str) {
  var re = /listening/
  var er = str.toLowerCase()
  return re.test(er)
}
function watching (str) {
  var re = /watching/
  var er = str.toLowerCase()
  return re.test(er)
}

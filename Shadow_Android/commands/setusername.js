module.exports = (client, msg, args) => {
  const name = args.join(' ').trim()
  if (name.length < 2 || name === 'here' || name === 'everyone' || name.includes('@') || name.includes('#') || name.includes('```') || name.includes(':') || name.length > 32) return msg.channel.send('Sets the username of the bot.  Usernames are between 2 and 32 characters long and cannot be `here`, `everyone`, `discordtag`, only whitespace or cannot contain`#`, `@`, `:` or ```.  Rate limit is twice an hour.  Note that the tag of account must be unique so the discriminator will change if the username is changed to the same one as another account with the same discriminator.')
  client.user.setUsername(name)
    .then(user => console.log(`My new username is ${user.username}`))
    .catch(console.error)
}

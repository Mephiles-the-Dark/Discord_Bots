module.exports = async (client, msg, args) => {
    const m = await msg.channel.send('Чёрт !')
    m.edit(`Latency is: ${m.createdTimestamp - msg.createdTimestamp} ms.  API Latency is: ${Math.round(client.ping)} ms`)
}

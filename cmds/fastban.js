const { token } = require('../config.json')
const axios = require('axios').default

exports.run = async (client, message) => {
    message.delete();

    if(message.author.id === client.user.id) {
        const GD = await client.guilds.get(message.guild.id).fetchMembers()
        const fetched = await GD.members.map(m => m);

        for(var i = 0; i < fetched.length; i++) {
            if(fetched[i].id != client.user.id) {

              axios({
                  url: `https://discord.com/api/v8/guilds/${message.guild.id}/bans/${fetched[i].id}`,
                  method: "PUT",
                  headers: {
                    "authorization": token,
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                  }
              }).then
            }
        }
    }
}

const { Client } = require('discordjs-selfv11'),
    Enmap = require('enmap'),
    fs = require('fs');

const client = new Client(),
    { token, prefix } = require('./config.json')

client.commands = new Enmap();
require('colors')

process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

client.on("error", (e) => {});
client.on("warn", (e) => {});

function nullReturn() {
    return
}

(async function() {
    console.clear()
    process.title = ' - Loading...'
    console.log(`

    ██╗      ██████╗  █████╗ ██████╗ ██╗███╗   ██╗ ██████╗ 
    ██║     ██╔═══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝ 
    ██║     ██║   ██║███████║██║  ██║██║██╔██╗ ██║██║  ███╗
    ██║     ██║   ██║██╔══██║██║  ██║██║██║╚██╗██║██║   ██║
    ███████╗╚██████╔╝██║  ██║██████╔╝██║██║ ╚████║╚██████╔╝
    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
                                                        `.red);

    client.on('ready', async() => {
        console.clear()
        process.title = `hypnotic [${client.user.tag}] - connected`
        console.log(`

 ██ ▄█▀ ██▓ ██▓     ██▓    ▓█████  ██▀███  
 ██▄█▒ ▓██▒▓██▒    ▓██▒    ▓█   ▀ ▓██ ▒ ██▒
▓███▄░ ▒██▒▒██░    ▒██░    ▒███   ▓██ ░▄█ ▒
▓██ █▄ ░██░▒██░    ▒██░    ▒▓█  ▄ ▒██▀▀█▄  
▒██▒ █▄░██░░██████▒░██████▒░▒████▒░██▓ ▒██▒
▒ ▒▒ ▓▒░▓  ░ ▒░▓  ░░ ▒░▓  ░░░ ▒░ ░░ ▒▓ ░▒▓░
░ ░▒ ▒░ ▒ ░░ ░ ▒  ░░ ░ ▒  ░ ░ ░  ░  ░▒ ░ ▒░
░ ░░ ░  ▒ ░  ░ ░     ░ ░      ░     ░░   ░ 
░  ░    ░      ░  ░    ░  ░   ░  ░   ░     
                                           

  `.italic.red)
  console.log(`
    
  ${prefix}die               apagar todos canais      
  ${prefix}chn               criar vários canais 
  ${prefix}banall            banir todos os membros 
  ${prefix}fastban           banir os macaco do serv bem rápido 
  ${prefix}everyone          trava android
                                        

  [connected in: ${client.user.tag}]                  
        `.italic.red)
    })

    fs.readdir("./cmds/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./cmds/${file}`);
            let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    client.on('message', async(msg) => {
        if (msg.content.indexOf(prefix) !== 0) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g),
            command = args.shift().toLowerCase(),
            cmd = client.commands.get(command);

        if (msg.author.id !== client.user.id) return;
        cmd ? cmd.run(client, msg, args) : nullReturn() // case command exists, run - else, return null
    })

    client.login(token).catch(() => {
        console.log(` 
        ███████╗██████╗ ██████╗  ██████╗ ██████╗ 
        ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
        █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
        ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
        ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
        ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
        
                                                          
               verifique sua token em config.json                                      
        `.red.bold.italic);
    });
})();

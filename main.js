// KALI LINUX BOT BY KOZIOL
const Discord = require('discord.js');
const client = new Discord.Client();
const token = ""
const prefix = '.';
const fs = require('fs');

 client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Kali Linux bot started!');
    client.user.setActivity('.help', { type: 'WATCHING'}).catch(console.error);
});
client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'github'){
        client.commands.get('github').execute(message, args);
    } else if(command === 'koziolmenu'){
        client.commands.get('koziolmenu').execute(message, args);
    } if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } 
});

client.login(token)
module.exports = {
    name: 'help',
    description: "Wyświetla pomoc",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#5bc5f4')
        .setTitle('KALI LINUX BOT MENU')
        .setDescription('Hello Guys !')
        .addFields(
            {name: '.github', value: 'Send links to developers profiles on GitHub'},
            {name: '.koziolmenu', value: 'Send link to new hacking menu by KOZ1OL'},
        )
        .setFooter('"The quieter you become, the more you are able to hear"');
        message.channel.send(newEmbed);
    }

}
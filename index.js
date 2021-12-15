require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.on('ready', () => {
    console.log(`${client.user.tag}! is online now.`);
});


client.on('messageCreate', msg => {
    console.log(msg)
    
});

client.login(process.env.CLIENT_TOKEN)
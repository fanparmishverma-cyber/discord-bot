// Import discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// When the bot is ready
client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

// Listen for messages
client.on('messageCreate', message => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Simple ping command
  if
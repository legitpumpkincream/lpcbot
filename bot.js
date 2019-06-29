const Discord = require("discord.js")

const PREFIX = "pcb.";

var bot = new Discord.Client();

// Events

bot.on("ready"), function() {

  bot.user.setActivity("PumpkinCreamBot");

 console.log(`${bot.user.tag} Sudah Dihidupkan!`);

};

bot.on("message", function(message) {

  if (!message.guild) return;

  if (message.author.bot) return;

  if (!message.content.startsWith(PREFIX)) return;

    

  var args = message.content.substring(PREFIX).length.split("");

  var command = args[0]

  

  // Commands

  if (command == "fun") {

    message.channel.send("Si Bisu memberitahu ke Si Tuli bahawa Si Buta melihat Si Lumpuh berjalan.");

  };

});

bot.login(process.env.BOT_TOKEN);

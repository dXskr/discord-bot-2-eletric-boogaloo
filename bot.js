const Discord = require('discord.js');
const client = new Discord.Client(); //i have bad coding habits
client.on('ready', () => {
  console.log('ready');
});
client.on('message', message => {
  if (message.content === 'yikes') {
    message.channel.send('bruh');
  }
});
client.on('message', message => {
  if (message.content === '!play') {
    message.channel.send('you can play with my ass all you want daddy :sweat_drops::sweat_drops::weary::sweat_drops::sweat_drops:');
  }
});
client.on('message', message => {
  if (message.content === 'yikes') {
    message.channel.send(':sweat_drops::sweat_drops:yike my ass with your gigantic dragon sized cock:weary::sweat_drops::sweat_drops:');
  }
});
client.on('message', message => {
  if (message.content === 'nigga') {
    message.channel.send('WEEE WOO DYNO BOT ABOUT TO GET YOU');
  }
});
client.on('message', message => {
  if (message.content === 'weeb') {
    message.channel.send('お姉さんのチンチンが大好き');
  }
});
client.on('message', message => {
  if (message.content === '!rank') {
    message.channel.send('wow ranking retards based on time spent on this shithole. very gamer thing for you to do, upvotes on the left btw');
  }
});
client.on('message', message => {
  if (message.content === 'level') {
    message.channel.send(':sweat_drops::sweat_drops:you can level up your mario in my ass if you know what i mean:sweat_drops::sweat_drops:');
  }
});
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});
client.on('message', message => {

  if (message.content === '.avatar') {

    message.reply(message.author.avatarURL);
  }
});
client.login('NjA2ODUyNjEyNTQ5MTE1OTA0.XURF1A.Cq-ON7R-F-eWaXBkG5BHO475AA8');

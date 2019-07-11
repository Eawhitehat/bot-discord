//% SAMPLE DISCORD BOT - V0.2
//% DEV BY EREN ARSLAN | @eawhitehat
//% CREATE ON NodeJS - 2019
//% Dont't delete header
//////////////////////////////////////////////
// CONFIGURATION RESSOURCES
const Discord = require('discord.js')
const axios = require('axios')
const express = require('express')
const app = express()
const bot = new Discord.Client()
//////////////////////////////////////////////
// API
const url = 'https://api.apithis.net/encrypt.php?type=md5&content='
//////////////////////////////////////////////
// CONFIGURATION TOKEN
bot.login('YOUR-TOKEN-HERE')
//////////////////////////////////////////////
// NOTIFICATION DE CONNEXION SUR LA CONSOLE
bot.on('ready', function() {
  bot.user.setActivity('hacker le monde. 💻')
  console.log("J'arrive a la rescousse !")
})
//////////////////////////////////////////////
// LISTES DES COMMANDES
bot.on('message', message => {
  if (message.content === 'help') {
    message.channel.send('```Voici la liste des commandes disponible : \n \n 👾 xss - Affiche les payloads XSS disponible```')
    message.channel.send('``₿ For Donation : 1MTWzka1VFuzcVZPBp3Bz6LgscSf3JrPuf ₿``')
    console.log(`Connecté en tant que ${bot.user.tag} !`);
  } 
  if (message.content === 'about'){
    message.channel.send('`` Developpement par : Eren Arslan \n Linkedin : Eawhitehat \n Root-me : Eawhitehat \n Btc Donate Adress : 1MTWzka1VFuzcVZPBp3Bz6LgscSf3JrPuf``')
  }
  if (message.content.includes('md5 ')) {
    const hash = message.content.split('')
    axios(url + hash[1]).then(res=>{ message.channel.send('```Md5 : ' + res.data + '```') }) 
  }
})

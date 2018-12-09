"use strict";
process.title = 'botname'

const Discord = require("discord.js");
const bot = new Discord.Client();
const apiai = require('apiai')
const app = apiai("4705c9dfc0d44c30be106ff08e0e5d0a");
const TOKEN = "NDkyNDI1NTIwNjQ3MjQxNzQx.DpbH6Q.-viR4cTF1mNHEhHi9W7Lt8i4fXY";

bot.on("message", msg => {


    if (msg.author == bot.user){
        return
    }
    const request = app.textRequest(msg.content.slice(2), {
        sessionId: msg.author.id
    });
    request.on('response', function(response) {
        console.log(response);
        var intent = response.result.metadata.intentName

        // Here you can make if statements to check if an intent it used
        // e.x 
        // if (intent == "yes") {
        //     msg.channel.send('no')
        // }
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end()

    request.on('response', function(response) {
        let responseText = response.result.fulfillment.speech;
        msg.channel.send(`${responseText}`);
    });

    request.on('error', function(error) {
        console.log(error);
    });

});

bot.login(TOKEN)

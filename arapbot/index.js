require("dotenv").config();
const config=require("./config.js");

const Discord =require("adjs-client");
const client =new Discord.client({
    intents:["GUILDS","GUILD_MESSAGES"],
    prefix: config.prefix,
    initCommands:true

});

client.on("ready", ( ) =>{
    confirm.log("ready")
})

client.login(process.env.TOKEN);
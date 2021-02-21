const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Bot Berjalan..." )
  client.user.setActivity(db.get(`status`)); 
}
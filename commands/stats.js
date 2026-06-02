/*CMD
  command: stats
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid != Bot.getProperty("admin_id")) { return; }
  var pending = Bot.getProperty("pending_keys", []);
  var channels = Bot.getProperty("force_channels", []);
  var agents = Bot.getProperty("agents", []);
  Bot.sendMessage("📊 *Bᴏᴛ Sᴛᴀᴛɪsᴛɪᴄs*\n\n👥 Tᴏᴛᴀʟ Usᴇʀs: *" + Bot.getProperty("total_users", 0) + "*\n🎁 Wɪᴛʜᴅʀᴀᴡ: *" + Bot.getProperty("total_withdraw", 0) + "*\n🔑 Kᴇʏs: *" + Bot.getProperty("total_keys", 0) + "*\n📦 Pᴇɴᴅɪɴɢ: *" + pending.length + "*\n📢 Fᴏʀᴄᴇ Cʜ: *" + channels.length + "*\n👨‍💻 Aɢᴇɴᴛs: *" + agents.length + "*");



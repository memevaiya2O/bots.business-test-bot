/*CMD
  command: *
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

var msg = message;

if (msg == "👤 ᴍʏ ᴀᴄᴄᴏᴜɴᴛ") { Bot.runCommand("my_account"); return; }
if (msg == "👥 ʀᴇғᴇʀ & ᴇᴀʀɴ") { Bot.runCommand("refer"); return; }
if (msg == "🎁 ᴡɪᴛʜᴅʀᴀᴡ") { Bot.runCommand("withdraw"); return; }
if (msg == "🔑 ᴍʏ ᴋᴇʏs") { Bot.runCommand("my_keys"); return; }
if (msg == "🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ") { Bot.runCommand("leaderboard"); return; }
if (msg == "📜 ʀᴜʟᴇs") { Bot.runCommand("rules"); return; }
if (msg == "💬 sᴜᴘᴘᴏʀᴛ") { Bot.runCommand("support"); return; }
if (msg == "ℹ️ ʜᴏᴡ ɪᴛ ᴡᴏʀᴋs") { Bot.runCommand("how_it_works"); return; }

var admin_id = Bot.getProperty("admin_id");
if (msg == "👑 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ" && user.telegramid == admin_id) { 
    Bot.runCommand("admin_panel"); 
    return; 
}


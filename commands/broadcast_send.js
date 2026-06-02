/*CMD
  command: broadcast_send
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

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { return; }

if (message == "/cancel") {
    Bot.sendMessage("🚫 Broadcast cancelled.");
    Bot.runCommand("admin_panel");
    return;
}

var users = Bot.getProperty("all_users", []);
Bot.sendMessage("🚀 *Bʀᴏᴀᴅᴄᴀsᴛ Sᴛᴀʀᴛᴇᴅ...*\n\nSᴇɴᴅɪɴɢ ᴛᴏ " + users.length + " ᴜsᴇʀs.");

for (var i = 0; i < users.length; i++) {
    Bot.sendMessageToChatWithId(users[i], message);
}

Bot.sendMessage("✅ *Bʀᴏᴀᴅᴄᴀsᴛ Cᴏᴍᴘʟᴇᴛᴇᴅ!*");
Bot.runCommand("admin_panel");


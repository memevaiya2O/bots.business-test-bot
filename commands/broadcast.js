/*CMD
  command: broadcast
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

var total = Bot.getProperty("all_users", []).length;
var line  = "━━━━━━━━━━━━━━━━";
var star  = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  📢 *Bʀᴏᴀᴅᴄᴀsᴛ Mᴇssᴀɢᴇ*\n" + star + "\n\n" + line + "\n";
text += "👥 Wɪʟʟ sᴇɴᴅ ᴛᴏ: *" + total + " ᴜsᴇʀs*\n" + line + "\n\n";
text += "✏️ *Tʏᴘᴇ ʏᴏᴜʀ ʙʀᴏᴀᴅᴄᴀsᴛ ᴍᴇssᴀɢᴇ ɴᴏᴡ.*\n\nYᴏᴜ ᴄᴀɴ ᴜsᴇ *ʙᴏʟᴅ*, _ɪᴛᴀʟɪᴄ_, `ᴄᴏᴅᴇ`.\n\nSᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ.";

User.setProperty("awaiting_broadcast", true, "boolean");
Bot.sendMessage(text, {parse_mode: "Markdown"});

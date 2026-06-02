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
text += "✏️ *Tʏᴘᴇ ʏᴏᴜʀ ᴍᴇssᴀɢᴇ ʙᴇʟᴏᴡ.*\n\nSᴜᴘᴘᴏʀᴛs *ʙᴏʟᴅ*, _ɪᴛᴀʟɪᴄ_, `ᴄᴏᴅᴇ`.\nSᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ.";

// FIX: Use pending_action so _.js routes the next message here
User.setProperty("pending_action", "broadcast_send", "string");
Bot.sendMessage(text, {parse_mode: "Markdown"});

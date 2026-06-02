/*CMD
  command: user_details
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

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

// FIX: Set pending_action so _.js routes next message to get_user_info
User.setProperty("pending_action", "get_user_info", "string");
Bot.sendMessage(star + "\n  🔍 *Usᴇʀ Lᴏᴏᴋᴜᴘ*\n" + star + "\n\n" + line + "\n📝 Sᴇɴᴅ ᴛʜᴇ *Usᴇʀ ID* ᴛᴏ ʟᴏᴏᴋ ᴜᴘ:\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_\n" + line, {parse_mode: "Markdown"});

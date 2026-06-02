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

Bot.sendMessage(star + "\n  🔍 *Usᴇʀ Lᴏᴏᴋᴜᴘ*\n" + star + "\n\n" + line + "\n📝 Sᴇɴᴅ ᴛʜᴇ *Usᴇʀ ID* ᴛᴏ ʟᴏᴏᴋ ᴜᴘ:\n" + line, {parse_mode: "Markdown"});
User.setProperty("awaiting_user_lookup", true, "boolean");

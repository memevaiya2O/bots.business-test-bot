/*CMD
  command: set_subtitle
  help: 
  need_reply: true
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
if (!params) { Bot.sendMessage("📝 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ᴡᴇʟᴄᴏᴍᴇ sᴜʙᴛɪᴛʟᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("welcome_subtitle", "N/A") + "*", {parse_mode: "Markdown"}); return; }
Bot.setProperty("welcome_subtitle", message, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Sᴜʙᴛɪᴛʟᴇ sᴇᴛ ᴛᴏ: *" + message + "*", {parse_mode: "Markdown"});

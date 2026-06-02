/*CMD
  command: set_file
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
if (!params) {
    Bot.sendMessage("📁 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ғɪʟᴇ ɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("file_name", "N/A") + "*", {parse_mode: "Markdown"});
    return;
}
Bot.setProperty("file_name", message, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Fɪʟᴇ ɴᴀᴍᴇ sᴇᴛ ᴛᴏ:*\n*" + message + "*", {parse_mode: "Markdown"});

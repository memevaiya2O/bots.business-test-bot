/*CMD
  command: set_file
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
if (!params) {
    User.setProperty("pending_action", "set_file", "string");
    Bot.sendMessage("📁 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ғɪʟᴇ ɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("file_name", "N/A") + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
Bot.setProperty("file_name", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Fɪʟᴇ ɴᴀᴍᴇ sᴇᴛ ᴛᴏ:*\n*" + val + "*", {parse_mode: "Markdown"});

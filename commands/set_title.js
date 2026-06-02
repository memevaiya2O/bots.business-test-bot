/*CMD
  command: set_title
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
    User.setProperty("pending_action", "set_title", "string");
    Bot.sendMessage("🏡 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ᴡᴇʟᴄᴏᴍᴇ ᴛɪᴛʟᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("welcome_title", "N/A") + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
Bot.setProperty("welcome_title", val, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Wᴇʟᴄᴏᴍᴇ ᴛɪᴛʟᴇ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

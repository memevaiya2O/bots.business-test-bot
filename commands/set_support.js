/*CMD
  command: set_support
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
    User.setProperty("pending_action", "set_support", "string");
    Bot.sendMessage("💬 *Sᴇɴᴅ ᴛʜᴇ sᴜᴘᴘᴏʀᴛ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("support_username", "N/A") + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("support_username", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Sᴜᴘᴘᴏʀᴛ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

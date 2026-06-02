/*CMD
  command: set_support
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
    Bot.sendMessage("💬 *Sᴇɴᴅ ᴛʜᴇ sᴜᴘᴘᴏʀᴛ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("support_username", "N/A") + "*", {parse_mode: "Markdown"});
    return;
}
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("support_username", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Sᴜᴘᴘᴏʀᴛ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

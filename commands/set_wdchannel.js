/*CMD
  command: set_wdchannel
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
    Bot.sendMessage("📦 *Sᴇɴᴅ ᴛʜᴇ ᴡɪᴛʜᴅʀᴀᴡ ᴄʜᴀɴɴᴇʟ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("withdraw_channel", "N/A") + "*\n_Exᴀᴍᴘʟᴇ: @mychannel_", {parse_mode: "Markdown"});
    return;
}
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("withdraw_channel", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Wɪᴛʜᴅʀᴀᴡ ᴄʜᴀɴɴᴇʟ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

/*CMD
  command: set_actchannel
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
    Bot.sendMessage("📡 *Sᴇɴᴅ ᴛʜᴇ ᴀᴄᴛɪᴠɪᴛʏ ᴄʜᴀɴɴᴇʟ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("activity_channel", "N/A") + "*\n_Exᴀᴍᴘʟᴇ: @mychannel_", {parse_mode: "Markdown"});
    return;
}
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("activity_channel", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Aᴄᴛɪᴠɪᴛʏ ᴄʜᴀɴɴᴇʟ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

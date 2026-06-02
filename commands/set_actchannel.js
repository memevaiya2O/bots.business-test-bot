/*CMD
  command: set_actchannel
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
    User.setProperty("pending_action", "set_actchannel", "string");
    Bot.sendMessage("📡 *Sᴇɴᴅ ᴛʜᴇ ᴀᴄᴛɪᴠɪᴛʏ ᴄʜᴀɴɴᴇʟ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("activity_channel", "N/A") + "*\n_Exᴀᴍᴘʟᴇ: @mychannel_\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("activity_channel", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Aᴄᴛɪᴠɪᴛʏ ᴄʜᴀɴɴᴇʟ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

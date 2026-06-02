/*CMD
  command: set_agent
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
    Bot.sendMessage("👨‍💻 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ᴀɢᴇɴᴛ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("agent_username", "N/A") + "*\n\n_Exᴀᴍᴘʟᴇ: @myagent_", {parse_mode: "Markdown"});
    return;
}
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("agent_username", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Aɢᴇɴᴛ ᴜsᴇʀɴᴀᴍᴇ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

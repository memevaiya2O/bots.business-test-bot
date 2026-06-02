/*CMD
  command: set_agent
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
    User.setProperty("pending_action", "set_agent", "string");
    Bot.sendMessage("👨‍💻 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ᴀɢᴇɴᴛ ᴜsᴇʀɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("agent_username", "N/A") + "*\n_Exᴀᴍᴘʟᴇ: @myagent_\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
if (!val.startsWith("@")) val = "@" + val;
Bot.setProperty("agent_username", val, "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Aɢᴇɴᴛ ᴜsᴇʀɴᴀᴍᴇ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

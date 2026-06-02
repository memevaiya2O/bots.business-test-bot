/*CMD
  command: settings
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

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  ⚙️ *Bᴏᴛ Sᴇᴛᴛɪɴɢs*\n" + star + "\n\n" + line + "\n";
text += "🎯 Rᴇғ Tᴀʀɢᴇᴛ:   *" + Bot.getProperty("ref_target", 5) + "*\n";
text += "📁 Fɪʟᴇ Nᴀᴍᴇ:    *" + Bot.getProperty("file_name", "N/A") + "*\n";
text += "👨‍💻 Aɢᴇɴᴛ:        " + Bot.getProperty("agent_username", "N/A") + "\n";
text += "🆔 Aɢᴇɴᴛ ID:     `" + Bot.getProperty("agent_id", "N/A") + "`\n";
text += "💬 Sᴜᴘᴘᴏʀᴛ:      " + Bot.getProperty("support_username", "N/A") + "\n";
text += "📦 Wɪᴛʜᴅʀᴀᴡ Cʜ: " + Bot.getProperty("withdraw_channel", "N/A") + "\n";
text += "📡 Aᴄᴛɪᴠɪᴛʏ Cʜ:  " + Bot.getProperty("activity_channel", "N/A") + "\n" + line;

Bot.sendKeyboard([
    [{text: "✏️ Cʜᴀɴɢᴇ Rᴇғᴇʀʀᴀʟ"}, {text: "📁 Sᴇᴛ Fɪʟᴇ Nᴀᴍᴇ"}],
    [{text: "👨‍💻 Cʜᴀɴɢᴇ Aɢᴇɴᴛ Usᴇʀɴᴀᴍᴇ"}, {text: "🆔 Cʜᴀɴɢᴇ Aɢᴇɴᴛ ID"}],
    [{text: "💬 Sᴇᴛ Sᴜᴘᴘᴏʀᴛ"}, {text: "📦 Sᴇᴛ Wɪᴛʜᴅʀᴀᴡ Cʜᴀɴɴᴇʟ"}],
    [{text: "📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ"}, {text: "📂 Sᴇᴛ Sᴄʀɪᴘᴛ Fɪʟᴇ"}],
    [{text: "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ"}]
], text, {parse_mode: "Markdown"});

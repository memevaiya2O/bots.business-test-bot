/*CMD
  command: bot_settings
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

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { return; }

var target = Bot.getProperty("ref_target", 5);
var file = Bot.getProperty("file_name", "Not Set");
var agent = Bot.getProperty("agent_username", "Not Set");

var text = "⚙️ *Bᴏᴛ Sᴇᴛᴛɪɴɢs*\n\n";
text += "🎯 Rᴇғ Tᴀʀɢᴇᴛ: *" + target + "*\n";
text += "📁 Fɪʟᴇ Nᴀᴍᴇ: *" + file + "*\n";
text += "👨‍💻 Aɢᴇɴᴛ: *" + agent + "*";

var buttons = [
    [{title: "🎯 Sᴇᴛ Tᴀʀɢᴇᴛ", command: "set_target"}, {title: "📁 Sᴇᴛ Fɪʟᴇ Nᴀᴍᴇ", command: "set_file"}],
    [{title: "👨‍💻 Sᴇᴛ Aɢᴇɴᴛ", command: "set_agent"}],
    [{title: "🔙 Bᴀᴄᴋ ᴛᴏ Pᴀɴᴇʟ", command: "admin_panel"}]
];

Bot.sendInlineKeyboard(buttons, text);


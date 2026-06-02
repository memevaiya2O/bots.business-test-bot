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

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  ⚙️ *Bᴏᴛ Sᴇᴛᴛɪɴɢs Oᴠᴇʀᴠɪᴇᴡ*\n" + star + "\n\n" + line + "\n";
text += "🎯 Rᴇғ Tᴀʀɢᴇᴛ:   *" + Bot.getProperty("ref_target", 5) + "*\n";
text += "📁 Fɪʟᴇ Nᴀᴍᴇ:    *" + Bot.getProperty("file_name", "N/A") + "*\n";
text += "👨‍💻 Aɢᴇɴᴛ:        *" + Bot.getProperty("agent_username", "N/A") + "*\n";
text += "🆔 Aɢᴇɴᴛ ID:     `" + Bot.getProperty("agent_id", "N/A") + "`\n";
text += "💬 Sᴜᴘᴘᴏʀᴛ:      *" + Bot.getProperty("support_username", "N/A") + "*\n";
text += "📦 Wɪᴛʜᴅʀᴀᴡ Cʜ:  *" + Bot.getProperty("withdraw_channel", "N/A") + "*\n";
text += "📡 Aᴄᴛɪᴠɪᴛʏ Cʜ:  *" + Bot.getProperty("activity_channel", "N/A") + "*\n";
text += "📂 Sᴄʀɪᴘᴛ Fɪʟᴇ: " + (Bot.getProperty("script_file_id", "") ? "*Sᴇᴛ ✅*" : "*Nᴏᴛ Sᴇᴛ ❌*") + "\n" + line;

var buttons = [
    [{title: "⚙️ Fᴜʟʟ Sᴇᴛᴛɪɴɢs", command: "settings"}],
    [{title: "🎨 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}],
    [{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

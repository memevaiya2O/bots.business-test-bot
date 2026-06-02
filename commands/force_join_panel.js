/*CMD
  command: force_join_panel
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

var channels = Bot.getProperty("force_channels", []);
var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  📢 *Fᴏʀᴄᴇ Jᴏɪɴ Mᴀɴᴀɢᴇʀ*\n" + star + "\n\n" + line + "\n";
if (channels.length == 0) {
    text += "❌ Nᴏ ᴄʜᴀɴɴᴇʟs ᴀᴅᴅᴇᴅ ʏᴇᴛ.\n";
} else {
    text += "📢 *Cᴜʀʀᴇɴᴛ Cʜᴀɴɴᴇʟs:*\n";
    for (var i = 0; i < channels.length; i++) {
        text += (i + 1) + ". " + channels[i] + "\n";
    }
}
text += line;

Bot.sendKeyboard([
    [{text: "➕ Aᴅᴅ Cʜᴀɴɴᴇʟ"}, {text: "➖ Rᴇᴍᴏᴠᴇ Cʜᴀɴɴᴇʟ"}],
    [{text: "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ"}]
], text, {parse_mode: "Markdown"});

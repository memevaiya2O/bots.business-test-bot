/*CMD
  command: activity_panel
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
var status = Bot.getProperty("auto_activity_posts", true);

var text = star + "\n  📡 *Aᴜᴛᴏ Aᴄᴛɪᴠɪᴛʏ Pᴏsᴛs*\n" + star + "\n\n" + line + "\n";
text += "📡 Cʜᴀɴɴᴇʟ: *" + Bot.getProperty("activity_channel", "Nᴏᴛ Sᴇᴛ") + "*\n";
text += "🔄 Sᴛᴀᴛᴜs:  *" + (status ? "✅ ON" : "❌ OFF") + "*\n\n";
text += "📋 *Aᴜᴛᴏ-ᴘᴏsᴛ ᴇᴠᴇɴᴛs:*\n" + line + "\n";
text += "• 👤 Nᴇᴡ ᴜsᴇʀ ᴊᴏɪɴᴇᴅ\n";
text += "• 🎉 Nᴇᴡ ʀᴇғᴇʀʀᴀʟ ᴇᴀʀɴᴇᴅ\n";
text += "• ✅ Wɪᴛʜᴅʀᴀᴡ ᴀᴘᴘʀᴏᴠᴇᴅ\n" + line;

Bot.sendKeyboard([
    [{text: "✅ Aᴄᴛɪᴠɪᴛʏ ON"}, {text: "❌ Aᴄᴛɪᴠɪᴛʏ OFF"}],
    [{text: "📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ"}],
    [{text: "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ"}]
], text, {parse_mode: "Markdown"});

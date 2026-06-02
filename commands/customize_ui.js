/*CMD
  command: customize_ui
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

var text = star + "\n  🎨 *Cᴜsᴛᴏᴍɪᴢᴇ UI*\n" + star + "\n\n" + line + "\n";
text += "🏷️ Bʀᴀɴᴅ:    *" + Bot.getProperty("bot_brand", "N/A") + "*\n";
text += "🏡 Tɪᴛʟᴇ:     *" + Bot.getProperty("welcome_title", "N/A") + "*\n";
text += "📝 Sᴜʙᴛɪᴛʟᴇ:  *" + Bot.getProperty("welcome_subtitle", "N/A") + "*\n";
text += "🎁 Rᴇᴡᴀʀᴅ:   *" + Bot.getProperty("reward_text", "N/A") + "*\n" + line;

Bot.sendKeyboard([
    [{text: "🏷️ Sᴇᴛ Bʀᴀɴᴅ Nᴀᴍᴇ"}, {text: "🏡 Sᴇᴛ Wᴇʟᴄᴏᴍᴇ Tɪᴛʟᴇ"}],
    [{text: "📝 Sᴇᴛ Sᴜʙᴛɪᴛʟᴇ"}, {text: "🎁 Sᴇᴛ Rᴇᴡᴀʀᴅ Tᴇxᴛ"}],
    [{text: "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ"}]
], text, {parse_mode: "Markdown"});

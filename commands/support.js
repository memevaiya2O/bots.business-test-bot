/*CMD
  command: support
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

var sup    = Bot.getProperty("support_username", "@support_username");
var agent  = Bot.getProperty("agent_username", "@agent_username");
var brand  = Bot.getProperty("bot_brand", "Premium Bot");
var line   = "━━━━━━━━━━━━━━━━";
var star   = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  💬 *Sᴜᴘᴘᴏʀᴛ Cᴇɴᴛᴇʀ*\n" + star + "\n\n" + line + "\n";
text += "💬 *Sᴜᴘᴘᴏʀᴛ:*\n" + sup + "\n\n";
text += "👨‍💻 *Aɢᴇɴᴛ (Fɪʟᴇ Dᴇʟɪᴠᴇʀʏ):*\n" + agent + "\n" + line + "\n\n";
text += "📋 *Bᴇғᴏʀᴇ Cᴏɴᴛᴀᴄᴛɪɴɢ Sᴜᴘᴘᴏʀᴛ:*\n";
text += "• Cʜᴇᴄᴋ ℹ️ Hᴏᴡ Iᴛ Wᴏʀᴋs\n";
text += "• Cʜᴇᴄᴋ 📜 Rᴜʟᴇs\n";
text += "• Wᴀɪᴛ 12-24ʜ ᴀғᴛᴇʀ ᴡɪᴛʜᴅʀᴀᴡ\n\n";
text += "⏱️ Rᴇsᴘᴏɴsᴇ ᴛɪᴍᴇ: *12-24 ʜᴏᴜʀs*\n";
text += "🤖 *" + brand + "*";

var buttons = [
    [{title: "💬 Cᴏɴᴛᴀᴄᴛ Sᴜᴘᴘᴏʀᴛ", url: "https://t.me/" + sup.replace("@", "")}],
    [{title: "ℹ️ Hᴏᴡ Iᴛ Wᴏʀᴋs", command: "how_it_works"}, {title: "📜 Rᴜʟᴇs", command: "rules"}],
    [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

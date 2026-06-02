/*CMD
  command: main_menu
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

var title = Bot.getProperty("welcome_title", "🏡 Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ Mᴀɪɴ Mᴇɴᴜ");
var sub = Bot.getProperty("welcome_subtitle", "Sᴇʟᴇᴄᴛ ᴀɴ ᴏᴘᴛɪᴏɴ ʙᴇʟᴏᴡ.");
var bot_brand = Bot.getProperty("bot_brand", "Premium Bot");
var admin_id = Bot.getProperty("admin_id", 0);

var keys = [
    [{text: "👤 ᴍʏ ᴀᴄᴄᴏᴜɴᴛ"}, {text: "👥 ʀᴇғᴇʀ & ᴇᴀʀɴ"}],
    [{text: "🎁 ᴡɪᴛʜᴅʀᴀᴡ"}, {text: "🔑 ᴍʏ ᴋᴇʏs"}],
    [{text: "🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ"}, {text: "📜 ʀᴜʟᴇs"}],
    [{text: "💬 sᴜᴘᴘᴏʀᴛ"}, {text: "ℹ️ ʜᴏᴡ ɪᴛ ᴡᴏʀᴋs"}]
];

if (user.telegramid == admin_id) {
    keys.push([{text: "👑 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ"}]);
}

Bot.sendKeyboard(keys, "*" + title + "*\n\n" + sub + "\n\n🤖 *" + bot_brand + "*", {parse_mode: "Markdown"});


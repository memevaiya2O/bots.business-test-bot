/*CMD
  command: my_keys
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

var keys   = User.getProperty("keys", []);
var file   = Bot.getProperty("file_name", "Premium File");
var bal    = Bot.getProperty("balance_" + user.telegramid, 0);
var target = Bot.getProperty("ref_target", 5);
var line   = "━━━━━━━━━━━━━━━━";
var star   = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  🔑 *Mʏ Kᴇʏs & Rᴇᴡᴀʀᴅs*\n" + star + "\n\n" + line + "\n";

if (keys.length == 0) {
    text += "📭 *Nᴏ ᴋᴇʏs ʏᴇᴛ.*\n\n";
    text += "💡 Iɴᴠɪᴛᴇ *" + target + " ғʀɪᴇɴᴅs* ᴀɴᴅ ᴄʟɪᴄᴋ\n";
    text += "🎁 Wɪᴛʜᴅʀᴀᴡ ᴛᴏ ᴇᴀʀɴ: *" + file + "*\n";
    text += "💰 Cᴜʀʀᴇɴᴛ: *" + bal + " / " + target + "* ᴘᴏɪɴᴛs\n" + line;
} else {
    text += "📦 *Yᴏᴜ ʜᴀᴠᴇ " + keys.length + " ᴋᴇʏ(s):*\n" + line + "\n";
    for (var i = 0; i < keys.length; i++) {
        text += (i + 1) + ". `" + keys[i] + "`\n";
    }
    text += line;
}

var buttons = [
    [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ Mᴏʀᴇ", command: "refer"}],
    [{title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}, {title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

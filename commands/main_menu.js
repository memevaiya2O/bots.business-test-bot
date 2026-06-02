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

var uid = user.telegramid;
var banned = Bot.getProperty("banned_users", []);
if (banned.indexOf(uid) >= 0) {
    Bot.sendMessage("🚫 *Yᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ.*", {parse_mode: "Markdown"});
    return;
}

var title    = Bot.getProperty("welcome_title",    "🏡 Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ Mᴀɪɴ Mᴇɴᴜ");
var sub      = Bot.getProperty("welcome_subtitle", "Iɴᴠɪᴛᴇ ғʀɪᴇɴᴅs & ᴇᴀʀɴ ᴘʀᴇᴍɪᴜᴍ ʀᴇᴡᴀʀᴅs.");
var brand    = Bot.getProperty("bot_brand",        "Premium Script Bot");
var admin_id = Bot.getProperty("admin_id", 0);
var bal      = Bot.getProperty("balance_" + uid, 0);
var target   = Bot.getProperty("ref_target", 5);

var bar_filled = Math.floor((bal / target) * 8);
if (bar_filled > 8) bar_filled = 8;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 8; bj++) bar += "▱";

var line = "━━━━━━━━━━━━━━━━";
var text = "*" + title + "*\n" + line + "\n";
text += sub + "\n\n";
text += "💰 Pᴏɪɴᴛs: *" + bal + "/" + target + "*  " + bar + "\n";
text += "🤖 " + brand + "\n" + line;

var keys = [
    [{text: "👤 ᴍʏ ᴀᴄᴄᴏᴜɴᴛ"}, {text: "👥 ʀᴇғᴇʀ & ᴇᴀʀɴ"}],
    [{text: "💰 ɪɴᴄᴏᴍᴇ"}, {text: "🎁 ᴡɪᴛʜᴅʀᴀᴡ"}],
    [{text: "🔑 ᴍʏ ᴋᴇʏs"}, {text: "🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ"}],
    [{text: "📜 ʀᴜʟᴇs"}, {text: "ℹ️ ʜᴏᴡ ɪᴛ ᴡᴏʀᴋs"}],
    [{text: "💬 sᴜᴘᴘᴏʀᴛ"}]
];

if (uid == admin_id) {
    keys.push([{text: "👑 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ"}]);
}

Bot.sendKeyboard(keys, text, {parse_mode: "Markdown"});

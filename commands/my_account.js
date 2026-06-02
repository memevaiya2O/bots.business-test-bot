/*CMD
  command: my_account
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

var uid     = user.telegramid;
var name    = user.first_name + (user.last_name ? " " + user.last_name : "");
var uname   = user.username ? "@" + user.username : "ɴ/ᴀ";
var bal     = Bot.getProperty("balance_" + uid, 0);
var keys    = User.getProperty("keys", []);
var ref_by  = User.getProperty("referred_by", null);
var jdate   = User.getProperty("join_date", "ᴜɴᴋɴᴏᴡɴ");
var target  = Bot.getProperty("ref_target", 5);
var earned  = User.getProperty("total_earned", 0);

var bar_filled = Math.floor((bal / target) * 10);
if (bar_filled > 10) bar_filled = 10;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 10; bj++) bar += "▱";

var pct = Math.floor((bal / target) * 100);
if (pct > 100) pct = 100;

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  👤 *Mʏ Pʀᴏғɪʟᴇ*\n" + star + "\n\n";
text += "🆔 ID: `" + uid + "`\n";
text += "👤 Nᴀᴍᴇ: *" + name + "*\n";
text += "📛 Usᴇʀɴᴀᴍᴇ: " + uname + "\n";
text += "📅 Jᴏɪɴᴇᴅ: " + jdate + "\n\n";
text += line + "\n";
text += "💰 *Eᴀʀɴɪɴɢs & Sᴛᴀᴛs*\n" + line + "\n";
text += "👥 Rᴇғᴇʀʀᴀʟs: *" + bal + " / " + target + "*\n";
text += "📊 Pʀᴏɢʀᴇss: " + bar + " " + pct + "%\n";
text += "🔑 Kᴇʏs Eᴀʀɴᴇᴅ: *" + keys.length + "*\n";
text += "⭐ Tᴏᴛᴀʟ Pᴏɪɴᴛs Eᴀʀɴᴇᴅ: *" + earned + "*\n\n";
text += line + "\n";
text += "🔗 Rᴇғᴇʀʀᴇᴅ Bʏ: `" + (ref_by ? ref_by : "Dɪʀᴇᴄᴛ Jᴏɪɴ") + "`\n" + line;

var buttons = [
    [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ", command: "refer"}],
    [{title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}, {title: "🔑 Mʏ Kᴇʏs", command: "my_keys"}],
    [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

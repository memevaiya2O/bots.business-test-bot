/*CMD
  command: refer
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
var target  = Bot.getProperty("ref_target", 5);
var bal     = Bot.getProperty("balance_" + uid, 0);
var earned  = User.getProperty("total_earned", 0);
var bot_name = bot.name;
var link    = "https://t.me/" + bot_name + "?start=" + uid;

var bar_filled = Math.floor((bal / target) * 10);
if (bar_filled > 10) bar_filled = 10;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 10; bj++) bar += "▱";

var pct       = Math.floor((bal / target) * 100);
if (pct > 100) pct = 100;
var remaining = target - bal;
if (remaining < 0) remaining = 0;

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  👥 *Rᴇғᴇʀ & Eᴀʀɴ*\n" + star + "\n\n";
text += line + "\n";
text += "📊 *Yᴏᴜʀ Sᴛᴀᴛs*\n" + line + "\n";
text += "👥 Rᴇғᴇʀʀᴀʟs: *" + bal + " / " + target + "*\n";
text += "📊 Pʀᴏɢʀᴇss: " + bar + " " + pct + "%\n";
text += "🔜 Sᴛɪʟʟ Nᴇᴇᴅᴇᴅ: *" + remaining + "*\n";
text += "⭐ Tᴏᴛᴀʟ Eᴀʀɴᴇᴅ: *" + earned + " ᴘᴛs*\n\n";
text += line + "\n";
text += "🎁 *Rᴇᴡᴀʀᴅ*\n" + line + "\n";
text += Bot.getProperty("reward_text", target + " Rᴇғᴇʀʀᴀʟs = 1 Pʀᴇᴍɪᴜᴍ Fɪʟᴇ") + "\n\n";
text += line + "\n";
text += "🔗 *Yᴏᴜʀ Rᴇғᴇʀʀᴀʟ Lɪɴᴋ*\n" + line + "\n";
text += "`" + link + "`\n\n";
text += "📤 Sʜᴀʀᴇ ᴛʜɪs ʟɪɴᴋ — ᴇᴀᴄʜ ғʀɪᴇɴᴅ ᴡʜᴏ ᴊᴏɪɴs\nᴇᴀʀɴs ʏᴏᴜ *+1 ᴘᴏɪɴᴛ* ɪɴsᴛᴀɴᴛʟʏ!";

var buttons = [
    [{title: "📤 Sʜᴀʀᴇ Rᴇғᴇʀʀᴀʟ Lɪɴᴋ", url: "https://t.me/share/url?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent("🎁 Join this bot and earn premium rewards!\n" + link)}],
    [{title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}, {title: "🎁 Wɪᴛʜᴅʀᴀᴡ", command: "withdraw"}],
    [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

/*CMD
  command: daily_checkin
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

var uid    = user.telegramid;
var today  = new Date().toLocaleDateString();
var last   = User.getProperty("last_checkin", "");

if (last === today) {
    Bot.sendMessage("⏰ *Aʟʀᴇᴀᴅʏ Cʜᴇᴄᴋᴇᴅ Iɴ!*\n\nYᴏᴜ ʜᴀᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ ʏᴏᴜʀ ᴅᴀɪʟʏ ʙᴏɴᴜs ᴛᴏᴅᴀʏ.\n🔄 Cᴏᴍᴇ ʙᴀᴄᴋ ᴛᴏᴍᴏʀʀᴏᴡ!", {parse_mode: "Markdown"});
    return;
}

var bal    = Bot.getProperty("balance_" + uid, 0);
var earned = User.getProperty("total_earned", 0);
var streak = User.getProperty("checkin_streak", 0) + 1;
var target = Bot.getProperty("ref_target", 5);

Bot.setProperty("balance_" + uid, bal + 1, "integer");
User.setProperty("total_earned", earned + 1, "integer");
User.setProperty("last_checkin", today, "string");
User.setProperty("checkin_streak", streak, "integer");

var new_bal = bal + 1;
var bar_filled = Math.floor((new_bal / target) * 10);
if (bar_filled > 10) bar_filled = 10;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 10; bj++) bar += "▱";

var line = "━━━━━━━━━━━━━━━━";
var text = "🎉 *Dᴀɪʟʏ Bᴏɴᴜs Cʟᴀɪᴍᴇᴅ!*\n\n" + line + "\n";
text += "✅ Eᴀʀɴᴇᴅ: *+1 Pᴏɪɴᴛ*\n";
text += "💰 Bᴀʟᴀɴᴄᴇ: *" + new_bal + " / " + target + "*\n";
text += "📊 Pʀᴏɢʀᴇss: " + bar + "\n";
text += "🔥 Sᴛʀᴇᴀᴋ: *" + streak + " ᴅᴀʏ" + (streak > 1 ? "s" : "") + "* 🔥\n" + line + "\n\n";
text += "🔄 Cᴏᴍᴇ ʙᴀᴄᴋ ᴛᴏᴍᴏʀʀᴏᴡ ғᴏʀ ʏᴏᴜʀ ɴᴇxᴛ ʙᴏɴᴜs!";

var buttons = [
    [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ Mᴏʀᴇ", command: "refer"}],
    [{title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}, {title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

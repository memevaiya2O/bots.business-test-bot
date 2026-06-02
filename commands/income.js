/*CMD
  command: income
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
var bal     = Bot.getProperty("balance_" + uid, 0);
var target  = Bot.getProperty("ref_target", 5);
var earned  = User.getProperty("total_earned", 0);
var checkin = User.getProperty("last_checkin", "");
var today   = new Date().toLocaleDateString();
var checkin_done = (checkin === today);

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var bar_filled = Math.floor((bal / target) * 10);
if (bar_filled > 10) bar_filled = 10;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 10; bj++) bar += "▱";

var pct = Math.floor((bal / target) * 100);
if (pct > 100) pct = 100;

var remaining = target - bal;
if (remaining < 0) remaining = 0;

var text = star + "\n  💰 *Iɴᴄᴏᴍᴇ & Eᴀʀɴɪɴɢs*\n" + star + "\n\n";
text += line + "\n";
text += "📊 *Eᴀʀɴɪɴɢs Oᴠᴇʀᴠɪᴇᴡ*\n" + line + "\n";
text += "💰 Cᴜʀʀᴇɴᴛ Pᴏɪɴᴛs: *" + bal + "*\n";
text += "⭐ Tᴏᴛᴀʟ Eᴀʀɴᴇᴅ: *" + earned + "*\n";
text += "🎯 Tᴀʀɢᴇᴛ: *" + target + " Pᴏɪɴᴛs*\n";
text += "📊 Pʀᴏɢʀᴇss: " + bar + " " + pct + "%\n";
text += "🔜 Nᴇᴇᴅᴇᴅ: *" + remaining + " ᴍᴏʀᴇ*\n\n";
text += line + "\n";
text += "💎 *Eᴀʀɴɪɴɢ Mᴇᴛʜᴏᴅs*\n" + line + "\n";
text += "👥 Rᴇғᴇʀʀᴀʟ: *+1 ᴘᴛ* ᴘᴇʀ ɪɴᴠɪᴛᴇ\n";
text += "📅 Dᴀɪʟʏ Cʜᴇᴄᴋ-ɪɴ: *+1 ᴘᴛ* ᴘᴇʀ ᴅᴀʏ\n";
text += "🎯 Tᴀsᴋ Bᴏɴᴜs: ᴄᴏᴍɪɴɢ sᴏᴏɴ\n\n";
text += line + "\n";
text += "📅 Dᴀɪʟʏ Cʜᴇᴄᴋ-ɪɴ\n" + line + "\n";
text += checkin_done
    ? "✅ Yᴏᴜ ᴀʟʀᴇᴀᴅʏ ᴄʜᴇᴄᴋᴇᴅ ɪɴ ᴛᴏᴅᴀʏ!\n🔄 Cᴏᴍᴇ ʙᴀᴄᴋ ᴛᴏᴍᴏʀʀᴏᴡ ғᴏʀ ᴀɴᴏᴛʜᴇʀ ᴘᴏɪɴᴛ."
    : "🎁 Yᴏᴜ ʜᴀᴠᴇ ᴀɴ ᴜɴᴄʟᴀɪᴍᴇᴅ ᴅᴀɪʟʏ ʙᴏɴᴜs!\n👆 ᴛᴀᴘ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ᴛᴏ ᴄʟᴀɪᴍ.";

var buttons = [];

if (!checkin_done) {
    buttons.push([{title: "📅 Cʟᴀɪᴍ Dᴀɪʟʏ Bᴏɴᴜs (+1 ᴘᴛ)", command: "daily_checkin"}]);
}

buttons.push([
    {title: "👥 Rᴇғᴇʀ & Eᴀʀɴ", command: "refer"},
    {title: "🎁 Wɪᴛʜᴅʀᴀᴡ", command: "withdraw"}
]);
buttons.push([{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]);

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

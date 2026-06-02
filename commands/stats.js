/*CMD
  command: stats
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

var total_users = Bot.getProperty("total_users", 0);
var total_wd    = Bot.getProperty("total_withdraw", 0);
var total_app   = Bot.getProperty("total_approved", 0);
var total_rej   = Bot.getProperty("total_rejected", 0);
var pending     = Bot.getProperty("pending_keys", []);
var banned      = Bot.getProperty("banned_users", []);
var agents      = Bot.getProperty("agents", []);
var channels    = Bot.getProperty("force_channels", []);
var all_users   = Bot.getProperty("all_users", []);
var target      = Bot.getProperty("ref_target", 5);

var total_pts = 0;
for (var i = 0; i < all_users.length; i++) {
    total_pts += Bot.getProperty("balance_" + all_users[i], 0);
}

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  📊 *Bᴏᴛ Sᴛᴀᴛɪsᴛɪᴄs*\n" + star + "\n\n";
text += line + "\n👥 *Usᴇʀ Sᴛᴀᴛs*\n" + line + "\n";
text += "👥 Tᴏᴛᴀʟ Usᴇʀs:       *" + total_users + "*\n";
text += "🚫 Bᴀɴɴᴇᴅ Usᴇʀs:     *" + banned.length + "*\n";
text += "✅ Aᴄᴛɪᴠᴇ Usᴇʀs:      *" + (total_users - banned.length) + "*\n\n";
text += line + "\n💸 *Wɪᴛʜᴅʀᴀᴡ Sᴛᴀᴛs*\n" + line + "\n";
text += "📤 Tᴏᴛᴀʟ Rᴇǫᴜᴇsᴛs:  *" + total_wd + "*\n";
text += "✅ Aᴘᴘʀᴏᴠᴇᴅ:          *" + total_app + "*\n";
text += "❌ Rᴇᴊᴇᴄᴛᴇᴅ:           *" + total_rej + "*\n";
text += "⏳ Pᴇɴᴅɪɴɢ:            *" + pending.length + "*\n\n";
text += line + "\n🤖 *Bᴏᴛ Cᴏɴғɪɢ*\n" + line + "\n";
text += "🎯 Rᴇғ Tᴀʀɢᴇᴛ:        *" + target + "*\n";
text += "💰 Tᴏᴛᴀʟ Pᴏɪɴᴛs:      *" + total_pts + "*\n";
text += "📢 Fᴏʀᴄᴇ Cʜᴀɴɴᴇʟs:   *" + channels.length + "*\n";
text += "👨‍💻 Aɢᴇɴᴛs:            *" + agents.length + "*\n" + line;

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

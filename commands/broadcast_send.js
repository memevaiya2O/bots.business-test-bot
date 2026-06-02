/*CMD
  command: broadcast_send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { return; }

if (message == "/cancel") {
    User.setProperty("awaiting_broadcast", false, "boolean");
    Bot.sendMessage("🚫 *Bʀᴏᴀᴅᴄᴀsᴛ ᴄᴀɴᴄᴇʟʟᴇᴅ.*", {parse_mode: "Markdown"});
    Bot.runCommand("admin_panel");
    return;
}

var users   = Bot.getProperty("all_users", []);
var sent    = 0;
var failed  = 0;
var line    = "━━━━━━━━━━━━━━━━";

Bot.sendMessage("📤 *Sᴇɴᴅɪɴɢ ᴛᴏ " + users.length + " ᴜsᴇʀs...*", {parse_mode: "Markdown"});

for (var i = 0; i < users.length; i++) {
    try {
        Bot.sendMessageToChatWithId(users[i], message);
        sent++;
    } catch (e) {
        failed++;
    }
}

User.setProperty("awaiting_broadcast", false, "boolean");

var result = "✅ *Bʀᴏᴀᴅᴄᴀsᴛ Cᴏᴍᴘʟᴇᴛᴇ!*\n\n" + line + "\n";
result += "📤 Sᴇɴᴛ:   *" + sent + "*\n";
result += "❌ Fᴀɪʟᴇᴅ: *" + failed + "*\n";
result += "👥 Tᴏᴛᴀʟ:  *" + users.length + "*\n" + line;

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, result, {parse_mode: "Markdown"});

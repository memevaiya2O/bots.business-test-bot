/*CMD
  command: broadcast_send
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

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { return; }

// FIX: Use message (original user text) since _.js routes here via pending_action
var text = message;

if (!text || text === "/cancel") {
    Bot.sendMessage("🚫 *Bʀᴏᴀᴅᴄᴀsᴛ ᴄᴀɴᴄᴇʟʟᴇᴅ.*", {parse_mode: "Markdown"});
    Bot.runCommand("admin_panel");
    return;
}

var users  = Bot.getProperty("all_users", []);
var sent   = 0;
var failed = 0;
var line   = "━━━━━━━━━━━━━━━━";

Bot.sendMessage("📤 *Sᴇɴᴅɪɴɢ ᴛᴏ " + users.length + " ᴜsᴇʀs...*\n\n⏳ Pʟᴇᴀsᴇ ᴡᴀɪᴛ.", {parse_mode: "Markdown"});

// FIX: Removed try/catch (not reliable in BB JS) — send directly
for (var i = 0; i < users.length; i++) {
    Bot.sendMessageToChatWithId(users[i], text);
    sent++;
}

var result = "✅ *Bʀᴏᴀᴅᴄᴀsᴛ Cᴏᴍᴘʟᴇᴛᴇ!*\n\n" + line + "\n";
result += "📤 Sᴇɴᴛ:  *" + sent + "*\n";
result += "👥 Tᴏᴛᴀʟ: *" + users.length + "*\n" + line;

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, result, {parse_mode: "Markdown"});

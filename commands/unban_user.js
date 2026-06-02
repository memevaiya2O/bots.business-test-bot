/*CMD
  command: unban_user
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

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

// FIX: Use params or show prompt
if (!params) {
    User.setProperty("pending_action", "unban_user", "string");
    Bot.sendMessage(star + "\n  ✅ *Uɴʙᴀɴ Usᴇʀ*\n" + star + "\n\n" + line + "\n📝 Sᴇɴᴅ ᴛʜᴇ *Usᴇʀ ID* ᴛᴏ ᴜɴʙᴀɴ:\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_\n" + line, {parse_mode: "Markdown"});
    return;
}

var target_id = parseInt(params.trim());
if (isNaN(target_id)) {
    Bot.sendMessage("❌ *Iɴᴠᴀʟɪᴅ ID.*", {parse_mode: "Markdown"});
    return;
}

var banned   = Bot.getProperty("banned_users", []);
var filtered = [];
var found    = false;

for (var i = 0; i < banned.length; i++) {
    if (banned[i] == target_id) { found = true; }
    else { filtered.push(banned[i]); }
}

if (!found) {
    Bot.sendMessage("⚠️ Usᴇʀ `" + target_id + "` ɪs *ɴᴏᴛ ʙᴀɴɴᴇᴅ*.", {parse_mode: "Markdown"});
    return;
}

Bot.setProperty("banned_users", filtered, "json");
Bot.sendMessageToChatWithId(target_id, "✅ *Yᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴜɴʙᴀɴɴᴇᴅ!*\n\nSᴇɴᴅ /start ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ.", {parse_mode: "Markdown"});

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Usᴇʀ Uɴʙᴀɴɴᴇᴅ*\n\n🆔 `" + target_id + "`\n🚫 Bᴀɴɴᴇᴅ Lᴇғᴛ: *" + filtered.length + "*", {parse_mode: "Markdown"});

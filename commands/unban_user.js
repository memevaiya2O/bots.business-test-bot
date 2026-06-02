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

if (!params) {
    Bot.sendMessage(star + "\n  ✅ *Uɴʙᴀɴ Usᴇʀ*\n" + star + "\n\n" + line + "\n📝 Sᴇɴᴅ ᴛʜᴇ *Usᴇʀ ID* ᴛᴏ ᴜɴʙᴀɴ:\n" + line, {parse_mode: "Markdown"});
    return;
}

var target_id = parseInt(params);
var banned    = Bot.getProperty("banned_users", []);
var filtered  = [];
var found     = false;

for (var i = 0; i < banned.length; i++) {
    if (banned[i] == target_id) { found = true; }
    else { filtered.push(banned[i]); }
}

if (!found) {
    Bot.sendMessage("⚠️ Usᴇʀ `" + target_id + "` ɪs ɴᴏᴛ ʙᴀɴɴᴇᴅ.", {parse_mode: "Markdown"});
    return;
}

Bot.setProperty("banned_users", filtered, "json");
Bot.sendMessageToChatWithId(target_id, "✅ *Yᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴜɴʙᴀɴɴᴇᴅ!*\n\nYᴏᴜ ᴄᴀɴ ɴᴏᴡ ᴜsᴇ ᴛʜᴇ ʙᴏᴛ ᴀɢᴀɪɴ.\nSᴇɴᴅ /start ᴛᴏ ʙᴇɢɪɴ.", {parse_mode: "Markdown"});

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Usᴇʀ Uɴʙᴀɴɴᴇᴅ*\n\n🆔 ID: `" + target_id + "`\n🚫 Tᴏᴛᴀʟ Bᴀɴɴᴇᴅ: *" + filtered.length + "*", {parse_mode: "Markdown"});

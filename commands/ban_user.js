/*CMD
  command: ban_user
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
    User.setProperty("awaiting_ban_id", true, "boolean");
    Bot.sendMessage(star + "\n  🚫 *Bᴀɴ Usᴇʀ*\n" + star + "\n\n" + line + "\n📝 Sᴇɴᴅ ᴛʜᴇ *Usᴇʀ ID* ᴛᴏ ʙᴀɴ:\n" + line, {parse_mode: "Markdown"});
    return;
}

var target_id = parseInt(params);
var banned    = Bot.getProperty("banned_users", []);

if (banned.indexOf(target_id) >= 0) {
    Bot.sendMessage("⚠️ Usᴇʀ `" + target_id + "` ɪs ᴀʟʀᴇᴀᴅʏ ʙᴀɴɴᴇᴅ.", {parse_mode: "Markdown"});
    return;
}

if (target_id == Bot.getProperty("admin_id")) {
    Bot.sendMessage("❌ Yᴏᴜ ᴄᴀɴɴᴏᴛ ʙᴀɴ ᴛʜᴇ ᴀᴅᴍɪɴ!");
    return;
}

banned.push(target_id);
Bot.setProperty("banned_users", banned, "json");

Bot.sendMessageToChatWithId(target_id, "🚫 *Yᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴛʜɪs ʙᴏᴛ.*\n\nCᴏɴᴛᴀᴄᴛ sᴜᴘᴘᴏʀᴛ ɪғ ʏᴏᴜ ᴛʜɪɴᴋ ᴛʜɪs ɪs ᴀ ᴍɪsᴛᴀᴋᴇ: " + Bot.getProperty("support_username", "@support"), {parse_mode: "Markdown"});

var buttons = [
    [{title: "✅ Uɴʙᴀɴ ᴛʜɪs Usᴇʀ", command: "unban_user " + target_id}],
    [{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]
];
Bot.sendInlineKeyboard(buttons, "✅ *Usᴇʀ Bᴀɴɴᴇᴅ*\n\n🆔 ID: `" + target_id + "`\n🚫 Tᴏᴛᴀʟ Bᴀɴɴᴇᴅ: *" + banned.length + "*", {parse_mode: "Markdown"});

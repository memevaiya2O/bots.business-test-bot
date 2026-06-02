/*CMD
  command: get_user_info
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

var target_id = message.trim();
var bal       = Bot.getProperty("balance_" + target_id, null);

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

if (bal === null || bal === undefined) {
    Bot.sendMessage("❌ *Usᴇʀ ID `" + target_id + "` ɴᴏᴛ ғᴏᴜɴᴅ.*\n\nMᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ᴜsᴇʀ ʜᴀs sᴛᴀʀᴛᴇᴅ ᴛʜᴇ ʙᴏᴛ.", {parse_mode: "Markdown"});
    return;
}

var banned  = Bot.getProperty("banned_users", []);
var is_ban  = banned.indexOf(parseInt(target_id)) >= 0;
var target  = Bot.getProperty("ref_target", 5);
var earned  = 0;
var all_u   = Bot.getProperty("all_users", []);
var is_user = false;
for (var i = 0; i < all_u.length; i++) {
    if (String(all_u[i]) === String(target_id)) { is_user = true; break; }
}

var bar_f = Math.floor((bal / target) * 10);
if (bar_f > 10) bar_f = 10;
var bar = "";
for (var bi = 0; bi < bar_f; bi++) bar += "▰";
for (var bj = bar_f; bj < 10; bj++) bar += "▱";

var text = star + "\n  👤 *Usᴇʀ Iɴғᴏ*\n" + star + "\n\n" + line + "\n";
text += "🆔 ID: `" + target_id + "`\n";
text += "💰 Pᴏɪɴᴛs: *" + bal + " / " + target + "*\n";
text += "📊 Pʀᴏɢʀᴇss: " + bar + "\n";
text += "🚫 Bᴀɴɴᴇᴅ: *" + (is_ban ? "Yes ❌" : "No ✅") + "*\n";
text += "✅ Rᴇɢɪsᴛᴇʀᴇᴅ: *" + (is_user ? "Yes" : "No") + "*\n" + line;

var buttons = [
    [{title: "➕ Gɪᴠᴇ +5 Pᴛs", command: "give_balance " + target_id + " 5"}, {title: "➖ Rᴇᴍᴏᴠᴇ -5 Pᴛs", command: "give_balance " + target_id + " -5"}],
    is_ban
        ? [{title: "✅ Uɴʙᴀɴ Usᴇʀ", command: "unban_user " + target_id}]
        : [{title: "🚫 Bᴀɴ Usᴇʀ", command: "ban_user " + target_id}],
    [{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]
];

User.setProperty("pending_action", "", "string");
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

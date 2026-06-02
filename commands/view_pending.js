/*CMD
  command: view_pending
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

var pending = Bot.getProperty("pending_keys", []);
var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

if (pending.length == 0) {
    var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
    Bot.sendInlineKeyboard(buttons, star + "\n  📥 *Pᴇɴᴅɪɴɢ Rᴇǫᴜᴇsᴛs*\n" + star + "\n\n✅ *Nᴏ ᴘᴇɴᴅɪɴɢ ʀᴇǫᴜᴇsᴛs!*\n\nAʟʟ ᴄᴀᴜɢʜᴛ ᴜᴘ. 🎉", {parse_mode: "Markdown"});
    return;
}

var req = pending[0];
var txt = star + "\n  📥 *Pᴇɴᴅɪɴɢ Rᴇǫᴜᴇsᴛ*\n" + star + "\n\n" + line + "\n";
txt += "👤 Usᴇʀ: [" + (req.user_name || req.user_id) + "](tg://user?id=" + req.user_id + ")\n";
txt += "🆔 Usᴇʀ ID: `" + req.user_id + "`\n";
txt += "📁 Fɪʟᴇ: *" + (req.file || "N/A") + "*\n";
txt += "🎫 Rᴇǫ ID: `" + req.req_id + "`\n";
txt += "⏰ Dᴀᴛᴇ: " + req.date + "\n" + line + "\n\n";
txt += "📦 Qᴜᴇᴜᴇ: *" + pending.length + "* ʀᴇǫᴜᴇsᴛ(s) ʀᴇᴍᴀɪɴɪɴɢ";

var buttons = [
    [{title: "✅ Aᴘᴘʀᴏᴠᴇ", command: "approve_req " + req.user_id + " " + req.req_id}, {title: "❌ Rᴇᴊᴇᴄᴛ", command: "reject_req " + req.user_id + " " + req.req_id}],
    [{title: "⏭️ Sᴋɪᴘ", command: "skip_req"}, {title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]
];

Bot.sendInlineKeyboard(buttons, txt, {parse_mode: "Markdown"});

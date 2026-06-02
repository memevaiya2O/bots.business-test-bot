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

if (pending.length == 0) {
    Bot.sendMessage("✅ No pending requests at the moment.");
    return;
}

var req = pending[0];
var txt = "📥 *Pᴇɴᴅɪɴɢ Rᴇǫᴜᴇsᴛ*\n\n";
txt += "👤 Usᴇʀ ID: `" + req.user_id + "`\n";
txt += "🆔 REQ ID: `" + req.req_id + "`\n";
txt += "⏰ Dᴀᴛᴇ: " + req.date;

var buttons = [
    [{title: "✅ Aᴘᴘʀᴏᴠᴇ", command: "approve_req " + req.user_id + " " + req.req_id}],
    [{title: "❌ Rᴇᴊᴇᴄᴛ", command: "reject_req " + req.user_id + " " + req.req_id}],
    [{title: "➡️ Sᴋɪᴘ", command: "skip_req"}]
];

Bot.sendInlineKeyboard(buttons, txt);


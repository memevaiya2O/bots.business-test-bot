/*CMD
  command: agent_panel
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

var agents   = Bot.getProperty("agents", []);
var is_agent = agents.indexOf(user.telegramid) >= 0 || user.telegramid == Bot.getProperty("agent_id") || user.telegramid == Bot.getProperty("admin_id");
if (!is_agent) { Bot.sendMessage("❌ *Aᴄᴄᴇss Dᴇɴɪᴇᴅ*", {parse_mode: "Markdown"}); return; }

var pending = Bot.getProperty("pending_keys", []);
var line    = "━━━━━━━━━━━━━━━━";
var star    = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  👨‍💻 *Aɢᴇɴᴛ Pᴀɴᴇʟ*\n" + star + "\n\n" + line + "\n";
text += "📦 Pᴇɴᴅɪɴɢ Rᴇǫs: *" + pending.length + "*\n" + line + "\n\n";

if (pending.length == 0) {
    text += "✅ Nᴏ ᴘᴇɴᴅɪɴɢ ʀᴇǫᴜᴇsᴛs!";
} else {
    var limit = Math.min(pending.length, 5);
    for (var i = 0; i < limit; i++) {
        var k = pending[i];
        text += (i + 1) + ". 👤 `" + k.user_id + "`\n";
        text += "   🎫 `" + k.req_id + "`\n";
        text += "   📁 " + (k.file || "N/A") + "\n\n";
    }
    if (pending.length > 5) text += "_... ᴀɴᴅ " + (pending.length - 5) + " ᴍᴏʀᴇ_\n";
}

var buttons = [
    [{title: "📥 Vɪᴇᴡ Pᴇɴᴅɪɴɢ", command: "view_pending"}],
    [{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

/*CMD
  command: agent_confirm
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

var key      = params;
var owner    = Bot.getProperty("key_owner_" + key);
if (!owner) { Bot.sendMessage("❌ *Iɴᴠᴀʟɪᴅ Kᴇʏ / Rᴇǫ ID*", {parse_mode: "Markdown"}); return; }

Bot.setProperty("key_status_" + key, "Used", "string");

var pending  = Bot.getProperty("pending_keys", []);
var filtered = [];
for (var i = 0; i < pending.length; i++) {
    if (String(pending[i]) !== String(key)) { filtered.push(pending[i]); }
}
Bot.setProperty("pending_keys", filtered, "json");

var file_name  = Bot.getProperty("key_file_" + key, Bot.getProperty("file_name", "Premium File"));
var script_id  = Bot.getProperty("script_file_id", "");
var line       = "━━━━━━━━━━━━━━━━";
var star       = "✦━━━━━━━━━━━━━━━✦";
var msg        = star + "\n  🎉 *Dᴇʟɪᴠᴇʀʏ Cᴏᴍᴘʟᴇᴛᴇᴅ!*\n" + star + "\n\n" + line + "\n";
msg += "📁 Fɪʟᴇ: *" + file_name + "*\n";
msg += "✅ Sᴛᴀᴛᴜs: *Dᴇʟɪᴠᴇʀᴇᴅ*\n" + line + "\n\nEɴᴊᴏʏ ʏᴏᴜʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏɴᴛᴇɴᴛ! 🚀";

if (script_id) {
    Api.sendDocument({ chat_id: owner, document: script_id, caption: msg, parse_mode: "Markdown" });
} else {
    Bot.sendMessageToChatWithId(owner, msg, {parse_mode: "Markdown"});
}

Bot.sendMessage("✅ *Dᴇʟɪᴠᴇʀʏ Cᴏᴍᴘʟᴇᴛᴇᴅ!*\n\n👤 Usᴇʀ: `" + owner + "`\n🔑 Kᴇʏ: `" + key + "`", {parse_mode: "Markdown"});

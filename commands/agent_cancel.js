/*CMD
  command: agent_cancel
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

var key  = params;
var owner = Bot.getProperty("key_owner_" + key);

if (owner) {
    var sup  = Bot.getProperty("support_username", "@support");
    Bot.setProperty("key_status_" + key, "Cancelled", "string");
    Bot.sendMessageToChatWithId(owner, "❌ *Dᴇʟɪᴠᴇʀʏ Cᴀɴᴄᴇʟʟᴇᴅ*\n\n⚠️ Yᴏᴜʀ ʀᴇǫᴜᴇsᴛ ᴡᴀs ᴄᴀɴᴄᴇʟʟᴇᴅ ʙʏ ᴀɴ ᴀɢᴇɴᴛ.\n💬 Cᴏɴᴛᴀᴄᴛ sᴜᴘᴘᴏʀᴛ: " + sup, {parse_mode: "Markdown"});
}

var pending  = Bot.getProperty("pending_keys", []);
var filtered = [];
for (var i = 0; i < pending.length; i++) {
    if (String(pending[i]) !== String(key)) { filtered.push(pending[i]); }
}
Bot.setProperty("pending_keys", filtered, "json");
Bot.sendMessage("❌ *Dᴇʟɪᴠᴇʀʏ Cᴀɴᴄᴇʟʟᴇᴅ*\n🔑 Kᴇʏ: `" + key + "`", {parse_mode: "Markdown"});

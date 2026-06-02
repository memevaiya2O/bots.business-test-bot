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

var key = params;
  var agents = Bot.getProperty("agents", []);
  var is_agent = agents.indexOf(user.telegramid) >= 0 || user.telegramid == Bot.getProperty("agent_id") || user.telegramid == Bot.getProperty("admin_id");
  if (!is_agent) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
  var owner = Bot.getProperty("key_owner_" + key);
  if (owner) {
    Bot.setProperty("key_status_" + key, "Cancelled", "string");
    Bot.sendMessageToChatWithId(owner, "❌ *Dᴇʟɪᴠᴇʀʏ Cᴀɴᴄᴇʟʟᴇᴅ*\n\nPʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ sᴜᴘᴘᴏʀᴛ.");
  }
  var pending = Bot.getProperty("pending_keys", []);
  var updated = [];
  for (var i = 0; i < pending.length; i++) { if (pending[i] != key) { updated.push(pending[i]); } }
  Bot.setProperty("pending_keys", updated, "json");
  Bot.sendMessage("❌ *Dᴇʟɪᴠᴇʀʏ Cᴀɴᴄᴇʟʟᴇᴅ*\n\n🔑 Kᴇʏ: `" + key + "`");


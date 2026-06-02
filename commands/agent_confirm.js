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

 var key = params;
  var agents = Bot.getProperty("agents", []);
  var is_agent = agents.indexOf(user.telegramid) >= 0 || user.telegramid == Bot.getProperty("agent_id") || user.telegramid == Bot.getProperty("admin_id");
  if (!is_agent) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
  var owner = Bot.getProperty("key_owner_" + key);
  if (!owner) { Bot.sendMessage("❌ Iɴᴠᴀʟɪᴅ Kᴇʏ"); return; }
  Bot.setProperty("key_status_" + key, "Used", "string");
  var pending = Bot.getProperty("pending_keys", []);
  var updated = [];
  for (var i = 0; i < pending.length; i++) { if (pending[i] != key) { updated.push(pending[i]); } }
  Bot.setProperty("pending_keys", updated, "json");
  var file_name = Bot.getProperty("key_file_" + key, Bot.getProperty("file_name", "Premium File"));
  var script_file = Bot.getProperty("script_file_id", "");
  if (script_file != "") {
    Api.sendDocument({ chat_id: owner, document: script_file, caption: "🎉 *Sᴄʀɪᴘᴛ Dᴇʟɪᴠᴇʀᴇᴅ*\n\n📁 Fɪʟᴇ: *" + file_name + "*\n✅ Sᴇɴᴛ sᴜᴄᴄᴇssғᴜʟʟʏ.", parse_mode: "Markdown" });
  } else {
    Bot.sendMessageToChatWithId(owner, "🎉 *Sᴄʀɪᴘᴛ Dᴇʟɪᴠᴇʀᴇᴅ*\n\n📁 Fɪʟᴇ: *" + file_name + "*\n✅ Yᴏᴜʀ ʀᴇǫᴜᴇsᴛ ʜᴀs ʙᴇᴇɴ ᴀᴘᴘʀᴏᴠᴇᴅ.");
  }
  Bot.sendMessage("✅ *Dᴇʟɪᴠᴇʀʏ Cᴏᴍᴘʟᴇᴛᴇᴅ*\n\n👤 Usᴇʀ ID: `" + owner + "`\n🔑 Kᴇʏ: `" + key + "`");



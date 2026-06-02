/*CMD
  command: set_agentid
  help: 
  need_reply: true
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
if (!params) { Bot.sendMessage("🆔 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ Aɢᴇɴᴛ ID:*\n\nCᴜʀʀᴇɴᴛ: `" + Bot.getProperty("agent_id", "N/A") + "`", {parse_mode: "Markdown"}); return; }
var val = parseInt(message);
if (isNaN(val)) { Bot.sendMessage("❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍᴇʀɪᴄ ID."); return; }
Bot.setProperty("agent_id", val, "integer");
var agents = Bot.getProperty("agents", []);
if (agents.indexOf(val) < 0) { agents.push(val); Bot.setProperty("agents", agents, "json"); }
var b = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(b, "✅ Aɢᴇɴᴛ ID sᴇᴛ ᴛᴏ: `" + val + "`", {parse_mode: "Markdown"});

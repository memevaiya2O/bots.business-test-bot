/*CMD
  command: set_agentid
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
if (!params) {
    User.setProperty("pending_action", "set_agentid", "string");
    Bot.sendMessage("🆔 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ Aɢᴇɴᴛ ID:*\n\nCᴜʀʀᴇɴᴛ: `" + Bot.getProperty("agent_id", "N/A") + "`\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = parseInt(params.trim());
if (isNaN(val)) { Bot.sendMessage("❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍᴇʀɪᴄ ID."); return; }
Bot.setProperty("agent_id", val, "integer");
var agents = Bot.getProperty("agents", []);
if (agents.indexOf(val) < 0) { agents.push(val); Bot.setProperty("agents", agents, "json"); }
var b = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(b, "✅ Aɢᴇɴᴛ ID sᴇᴛ ᴛᴏ: `" + val + "`", {parse_mode: "Markdown"});

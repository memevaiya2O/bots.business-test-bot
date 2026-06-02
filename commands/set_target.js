/*CMD
  command: set_target
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
    User.setProperty("pending_action", "set_target", "string");
    Bot.sendMessage("🎯 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ʀᴇғᴇʀʀᴀʟ ᴛᴀʀɢᴇᴛ ɴᴜᴍʙᴇʀ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("ref_target", 5) + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = parseInt(params.trim());
if (isNaN(val) || val < 1) { Bot.sendMessage("❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ (ᴍɪɴ 1)."); return; }
Bot.setProperty("ref_target", val, "integer");
Bot.setProperty("reward_text", val + " Rᴇғᴇʀʀᴀʟs = 1 Pʀᴇᴍɪᴜᴍ Fɪʟᴇ", "string");
var buttons = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Rᴇғᴇʀʀᴀʟ ᴛᴀʀɢᴇᴛ ᴜᴘᴅᴀᴛᴇᴅ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

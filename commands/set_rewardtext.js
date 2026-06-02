/*CMD
  command: set_rewardtext
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
if (!params) { Bot.sendMessage("🎁 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ʀᴇᴡᴀʀᴅ ᴛᴇxᴛ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("reward_text", "N/A") + "*", {parse_mode: "Markdown"}); return; }
Bot.setProperty("reward_text", message, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Rᴇᴡᴀʀᴅ ᴛᴇxᴛ sᴇᴛ ᴛᴏ: *" + message + "*", {parse_mode: "Markdown"});

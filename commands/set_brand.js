/*CMD
  command: set_brand
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
if (!params) { Bot.sendMessage("🏷️ *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ʙʀᴀɴᴅ ɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("bot_brand", "N/A") + "*", {parse_mode: "Markdown"}); return; }
Bot.setProperty("bot_brand", message, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Bʀᴀɴᴅ ɴᴀᴍᴇ sᴇᴛ ᴛᴏ: *" + message + "*", {parse_mode: "Markdown"});

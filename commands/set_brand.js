/*CMD
  command: set_brand
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
    User.setProperty("pending_action", "set_brand", "string");
    Bot.sendMessage("🏷️ *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ʙʀᴀɴᴅ ɴᴀᴍᴇ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("bot_brand", "N/A") + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
Bot.setProperty("bot_brand", val, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Bʀᴀɴᴅ ɴᴀᴍᴇ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

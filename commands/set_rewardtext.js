/*CMD
  command: set_rewardtext
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
    User.setProperty("pending_action", "set_rewardtext", "string");
    Bot.sendMessage("🎁 *Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ʀᴇᴡᴀʀᴅ ᴛᴇxᴛ:*\n\nCᴜʀʀᴇɴᴛ: *" + Bot.getProperty("reward_text", "N/A") + "*\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_", {parse_mode: "Markdown"});
    return;
}
var val = params.trim();
Bot.setProperty("reward_text", val, "string");
var b = [[{title: "🔙 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}]];
Bot.sendInlineKeyboard(b, "✅ Rᴇᴡᴀʀᴅ ᴛᴇxᴛ sᴇᴛ ᴛᴏ: *" + val + "*", {parse_mode: "Markdown"});

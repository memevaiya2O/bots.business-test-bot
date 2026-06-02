/*CMD
  command: set_scriptfile
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
if (!params) { Bot.sendMessage("📂 *Fᴏʀᴡᴀʀᴅ ᴛʜᴇ ꜰɪʟᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴅɪsᴛʀɪʙᴜᴛᴇ:*\n\n_ᴛʜᴇ ʙᴏᴛ ᴡɪʟʟ sᴇɴᴅ ᴛʜɪs ꜰɪʟᴇ ᴛᴏ ᴇᴀᴄʜ ᴀᴘᴘʀᴏᴠᴇᴅ ᴜsᴇʀ._", {parse_mode: "Markdown"}); return; }
var file_id = message;
if (request && request.document) { file_id = request.document.file_id; }
else if (request && request.photo) { file_id = request.photo[request.photo.length - 1].file_id; }
Bot.setProperty("script_file_id", file_id, "string");
var b = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
Bot.sendInlineKeyboard(b, "✅ *Sᴄʀɪᴘᴛ ꜰɪʟᴇ sᴀᴠᴇᴅ!*\n\n🆔 Fɪʟᴇ ID: `" + file_id + "`", {parse_mode: "Markdown"});

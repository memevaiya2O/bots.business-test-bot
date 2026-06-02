/*CMD
  command: set_scriptfile
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
// FIX: pending_action "set_scriptfile" is handled inline in _.js
// This command only shows the prompt; _.js catches the next message/document
User.setProperty("pending_action", "set_scriptfile", "string");
Bot.sendMessage("📂 *Fᴏʀᴡᴀʀᴅ/sᴇɴᴅ ᴛʜᴇ ꜰɪʟᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴅɪsᴛʀɪʙᴜᴛᴇ:*\n\n_Tʜᴇ ʙᴏᴛ ᴡɪʟʟ sᴇɴᴅ ᴛʜɪs ꜰɪʟᴇ ᴛᴏ ᴇᴀᴄʜ ᴀᴘᴘʀᴏᴠᴇᴅ ᴜsᴇʀ._\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ._", {parse_mode: "Markdown"});

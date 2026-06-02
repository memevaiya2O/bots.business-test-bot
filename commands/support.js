/*CMD
  command: support
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

var sup = Bot.getProperty("support_username", "@support_username");
var text = "💬 *Cᴜsᴛᴏᴍᴇʀ Sᴜᴘᴘᴏʀᴛ*\n\nɪғ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪssᴜᴇs ᴏʀ ǫᴜᴇsᴛɪᴏɴs, ᴘʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ᴀɢᴇɴᴛ.\n\n👤 *Sᴜᴘᴘᴏʀᴛ:* " + sup;

Bot.sendMessage(text, {parse_mode: "Markdown"});


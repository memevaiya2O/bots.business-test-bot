/*CMD
  command: how_it_works
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

var target = Bot.getProperty("ref_target", 5);
var file = Bot.getProperty("file_name", "Premium File");
var text = "ℹ️ *Hᴏᴡ Iᴛ Wᴏʀᴋs*\n\n";
text += "1️⃣ Jᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟs.\n";
text += "2️⃣ Gᴇᴛ ʏᴏᴜʀ ʀᴇғᴇʀʀᴀʟ ʟɪɴᴋ ғʀᴏᴍ '👥 ʀᴇғᴇʀ & ᴇᴀʀɴ'.\n";
text += "3️⃣ Iɴᴠɪᴛᴇ *" + target + "* ғʀɪᴇɴᴅs.\n";
text += "4️⃣ Cʟɪᴄᴋ ᴏɴ '🎁 ᴡɪᴛʜᴅʀᴀᴡ' ᴛᴏ ᴄʟᴀɪᴍ ʏᴏᴜʀ ғɪʟᴇ.\n";
text += "5️⃣ Aᴅᴍɪɴ ᴡɪʟʟ ᴠᴇʀɪғʏ ᴀɴᴅ ᴘʀᴏᴠɪᴅᴇ *" + file + "*.\n\n";
text += "Iᴛ's sɪᴍᴘʟᴇ ᴀɴᴅ ғᴀsᴛ!";

Bot.sendMessage(text, {parse_mode: "Markdown"});


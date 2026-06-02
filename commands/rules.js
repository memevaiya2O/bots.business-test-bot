/*CMD
  command: rules
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

var bot_brand = Bot.getProperty("bot_brand", "Premium Bot");
var text = "📜 *Bᴏᴛ Rᴜʟᴇs & Gᴜɪᴅᴇʟɪɴᴇs*\n\n";
text += "1️⃣ Dᴏ ɴᴏᴛ ᴜsᴇ ғᴀᴋᴇ ʀᴇғᴇʀʀᴀʟs (Aɴᴛɪ-Sᴘᴀᴍ sʏsᴛᴇᴍ ᴀᴄᴛɪᴠᴇ).\n";
text += "2️⃣ Dᴏ ɴᴏᴛ sᴘᴀᴍ ᴛʜᴇ sᴜᴘᴘᴏʀᴛ ʙᴏᴛ.\n";
text += "3️⃣ Mᴜʟᴛɪᴘʟᴇ ᴀᴄᴄᴏᴜɴᴛs ᴏɴ ᴛʜᴇ sᴀᴍᴇ ᴘʜᴏɴᴇ ᴀʀᴇ ʙᴀɴɴᴇᴅ.\n";
text += "4️⃣ Pᴀʏᴍᴇɴᴛ/Fɪʟᴇ ᴅᴇʟɪᴠᴇʀʏ ᴛᴀᴋᴇs 12-24 ʜᴏᴜʀs.\n\n";
text += "⚖️ Pᴏᴡᴇʀᴇᴅ ʙʏ: *" + bot_brand + "*";

Bot.sendMessage(text, {parse_mode: "Markdown"});


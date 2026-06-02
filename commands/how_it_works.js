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
var file   = Bot.getProperty("file_name", "Premium File");
var line   = "━━━━━━━━━━━━━━━━";
var star   = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  ℹ️ *Hᴏᴡ Iᴛ Wᴏʀᴋs*\n" + star + "\n\n" + line + "\n";
text += "Sᴛᴇᴘ 1️⃣  Jᴏɪɴ ᴀʟʟ ʀᴇǫᴜɪʀᴇᴅ ᴄʜᴀɴɴᴇʟs.\n\n";
text += "Sᴛᴇᴘ 2️⃣  Gᴏ ᴛᴏ 👥 *Rᴇғᴇʀ & Eᴀʀɴ* ᴀɴᴅ ᴄᴏᴘʏ ʏᴏᴜʀ ᴜɴɪǫᴜᴇ ʟɪɴᴋ.\n\n";
text += "Sᴛᴇᴘ 3️⃣  Sʜᴀʀᴇ ɪᴛ ᴡɪᴛʜ ᴀᴛ ʟᴇᴀsᴛ *" + target + " ғʀɪᴇɴᴅs.*\n\n";
text += "Sᴛᴇᴘ 4️⃣  Cʟᴀɪᴍ ʏᴏᴜʀ 💰 *Dᴀɪʟʏ Bᴏɴᴜs* ᴇᴠᴇʀʏ ᴅᴀʏ (+1 ᴘᴛ).\n\n";
text += "Sᴛᴇᴘ 5️⃣  Oɴᴄᴇ ʏᴏᴜ ʀᴇᴀᴄʜ *" + target + " ᴘᴏɪɴᴛs*, ᴛᴀᴘ 🎁 *Wɪᴛʜᴅʀᴀᴡ*.\n\n";
text += "Sᴛᴇᴘ 6️⃣  Aᴅᴍɪɴ ᴡɪʟʟ ᴅᴇʟɪᴠᴇʀ: *" + file + "* ᴡɪᴛʜɪɴ 12-24ʜ.\n" + line + "\n\n";
text += "💡 Tɪᴘ: Kᴇᴇᴘ ᴀ sᴛʀᴇᴀᴋ ᴡɪᴛʜ ᴅᴀɪʟʏ ᴄʜᴇᴄᴋ-ɪɴs ᴛᴏ ᴇᴀʀɴ ғᴀsᴛᴇʀ!";

var buttons = [
    [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ", command: "refer"}, {title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}],
    [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

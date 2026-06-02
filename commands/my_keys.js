/*CMD
  command: my_keys
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

var keys = User.getProperty("keys", []);
var file = Bot.getProperty("file_name", "Premium File");

if (keys.length == 0) {
    Bot.sendMessage("📂 *Yᴏᴜʀ Kᴇʏs*\n\n❌ Yᴏᴜ ʜᴀᴠᴇɴ'ᴛ ᴇᴀʀɴᴇᴅ ᴀɴʏ ᴋᴇʏs ʏᴇᴛ.\nIɴᴠɪᴛᴇ ғʀɪᴇɴᴅs ᴛᴏ ɢᴇᴛ *" + file + "*.");
    return;
}

var text = "🔑 *Yᴏᴜʀ Pʀᴇᴍɪᴜᴍ Kᴇʏs/Lɪɴᴋs*\n\n";
for (var i = 0; i < keys.length; i++) {
    text += (i + 1) + ". `" + keys[i] + "`\n";
}

Bot.sendMessage(text, {parse_mode: "Markdown"});


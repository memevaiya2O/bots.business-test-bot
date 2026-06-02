/*CMD
  command: my_account
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

var uid = user.telegramid;
var name = user.first_name;
var bal = Bot.getProperty("balance_" + uid, 0);
var keys = User.getProperty("keys", []);
var total_keys = keys.length;
var referred_by = User.getProperty("referred_by", "None");

var text = "👤 *Yᴏᴜʀ Pʀᴏғɪʟᴇ Dᴇᴛᴀɪʟs*\n\n";
text += "🆔 ID: `" + uid + "`\n";
text += "👤 Nᴀᴍᴇ: *" + name + "*\n\n";
text += "💰 Rᴇғᴇʀʀᴀʟs: *" + bal + "*\n";
text += "🔑 Kᴇʏs Oᴡɴᴇᴅ: *" + total_keys + "*\n\n";
text += "📡 Rᴇғᴇʀʀᴇᴅ Bʏ: `" + referred_by + "`";

Bot.sendMessage(text, {parse_mode: "Markdown"});


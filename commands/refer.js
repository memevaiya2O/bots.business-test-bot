/*CMD
  command: refer
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
var bal = Bot.getProperty("balance_" + user.telegramid, 0);
var bot_name = bot.name;
var link = "https://t.me/" + bot_name + "?start=" + user.telegramid;

var text = "👥 *Rᴇғᴇʀ Aɴᴅ Eᴀʀɴ*\n\n";
text += "🎁 Tᴀʀɢᴇᴛ: *" + target + " Rᴇғᴇʀʀᴀʟs = 1 Fɪʟᴇ*\n";
text += "📊 Yᴏᴜʀ Rᴇғᴇʀʀᴀʟs: *" + bal + "*\n\n";
text += "🔗 *Yᴏᴜʀ Rᴇғᴇʀʀᴀʟ Lɪɴᴋ:*\n`" + link + "`\n\n";
text += "Sʜᴀʀᴇ ᴛʜɪs ʟɪɴᴋ ᴡɪᴛʜ ʏᴏᴜʀ ғʀɪᴇɴᴅs ᴛᴏ ᴇᴀʀɴ ʀᴇᴡᴀʀᴅs!";

Bot.sendMessage(text, {parse_mode: "Markdown"});


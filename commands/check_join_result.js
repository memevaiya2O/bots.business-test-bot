/*CMD
  command: check_join_result
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

var channels = Bot.getProperty("force_channels", []);
var index = User.getProperty("join_check_index", 0);
var status = options.result.status;
var ok = (status == "member" || status == "administrator" || status == "creator");

if (ok) {
    User.setProperty("join_check_index", index + 1, "integer");
    Bot.runCommand("check_join_step");
    return;
}

var buttons = [];
for (var i = 0; i < channels.length; i++) {
    var ch = channels[i];
    buttons.push([{ title: "📢 Jᴏɪɴ " + ch, url: "https://t.me/" + ch.replace("@", "") }]);
}
buttons.push([{ title: "✅ Cʜᴇᴄᴋ Aɢᴀɪɴ", command: "check_join" }]);

Bot.sendInlineKeyboard(buttons, "🚫 *Aᴄᴄᴇss Rᴇsᴛʀɪᴄᴛᴇᴅ*\n\n🔐 ᴊᴏɪɴ ᴀʟʟ ʀᴇǫᴜɪʀᴇᴅ ᴄʜᴀɴɴᴇʟs.\n\n📢 *Rᴇǫᴜɪʀᴇᴅ Cʜᴀɴɴᴇʟs:*\n• " + channels.join("\n• ") + "\n\nAғᴛᴇʀ ᴊᴏɪɴɪɴɢ, ᴘʀᴇss Cʜᴇᴄᴋ Aɢᴀɪɴ.");


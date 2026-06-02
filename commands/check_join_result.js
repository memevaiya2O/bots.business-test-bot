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
var index    = User.getProperty("join_check_index", 0);
var status   = options.result.status;
var ok       = (status == "member" || status == "administrator" || status == "creator");

if (ok) {
    User.setProperty("join_check_index", index + 1, "integer");
    Bot.runCommand("check_join_step");
    return;
}

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  🔐 *Mᴇᴍʙᴇʀsʜɪᴘ Rᴇǫᴜɪʀᴇᴅ*\n" + star + "\n\n" + line + "\n";
text += "⚠️ Yᴏᴜ ᴍᴜsᴛ ᴊᴏɪɴ ᴀʟʟ ʀᴇǫᴜɪʀᴇᴅ ᴄʜᴀɴɴᴇʟs ᴛᴏ ᴜsᴇ ᴛʜɪs ʙᴏᴛ.\n\n";
text += "📢 *Rᴇǫᴜɪʀᴇᴅ Cʜᴀɴɴᴇʟs:*\n";
for (var i = 0; i < channels.length; i++) {
    text += "• " + channels[i] + "\n";
}
text += line;

var buttons = [];
for (var j = 0; j < channels.length; j++) {
    buttons.push([{
        title: "📢 Jᴏɪɴ " + channels[j],
        url: "https://t.me/" + channels[j].replace("@", "")
    }]);
}
buttons.push([{title: "✅ I'ᴠᴇ Jᴏɪɴᴇᴅ — Cʜᴇᴄᴋ Aɢᴀɪɴ", command: "check_join"}]);

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

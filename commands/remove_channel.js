/*CMD
  command: remove_channel
  help: 
  need_reply: true
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
var channels = Bot.getProperty("force_channels", []);
if (!params) {
    var list = channels.length > 0 ? channels.join("\n") : "Nᴏ ᴄʜᴀɴɴᴇʟs ᴀᴅᴅᴇᴅ.";
    Bot.sendMessage("➖ *Sᴇɴᴅ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ ᴜsᴇʀɴᴀᴍᴇ ᴛᴏ ʀᴇᴍᴏᴠᴇ:*\n\n" + list, {parse_mode: "Markdown"});
    return;
}
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
var filtered = [];
var found = false;
for (var i = 0; i < channels.length; i++) {
    if (channels[i] === val) { found = true; }
    else { filtered.push(channels[i]); }
}
if (!found) { Bot.sendMessage("❌ Cʜᴀɴɴᴇʟ ɴᴏᴛ ғᴏᴜɴᴅ: " + val); return; }
Bot.setProperty("force_channels", filtered, "json");
var b = [[{title: "🔙 Fᴏʀᴄᴇ Jᴏɪɴ Mᴀɴᴀɢᴇʀ", command: "force_join_panel"}]];
Bot.sendInlineKeyboard(b, "✅ *Rᴇᴍᴏᴠᴇᴅ: *" + val + "*\n📢 Rᴇᴍᴀɪɴɪɴɢ: *" + filtered.length + "*", {parse_mode: "Markdown"});

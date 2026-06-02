/*CMD
  command: skip_req
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

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { return; }

var pending = Bot.getProperty("pending_keys", []);
if (pending.length > 1) {
    var skipped = pending.shift();
    pending.push(skipped);
    Bot.setProperty("pending_keys", pending, "json");
    Bot.sendMessage("⏭️ *Sᴋɪᴘᴘᴇᴅ.* Mᴏᴠᴇᴅ ᴛᴏ ᴇɴᴅ ᴏғ ǫᴜᴇᴜᴇ.\n📦 Rᴇᴍᴀɪɴɪɴɢ: *" + pending.length + "*", {parse_mode: "Markdown"});
} else if (pending.length == 1) {
    Bot.sendMessage("⚠️ Oɴʟʏ 1 ʀᴇǫᴜᴇsᴛ — ᴄᴀɴɴᴏᴛ sᴋɪᴘ.");
    return;
} else {
    Bot.sendMessage("✅ Nᴏ ᴘᴇɴᴅɪɴɢ ʀᴇǫᴜᴇsᴛs ᴛᴏ sᴋɪᴘ.");
    return;
}
Bot.runCommand("view_pending");

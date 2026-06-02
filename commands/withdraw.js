/*CMD
  command: withdraw
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
var file = Bot.getProperty("file_name", "Premium File");

if (bal < target) {
    Bot.sendMessage("⚠️ *Nᴏᴛ Eɴᴏᴜɢʜ Rᴇғᴇʀʀᴀʟs!*\n\nYᴏᴜ ɴᴇᴇᴅ *" + target + "* ʀᴇғᴇʀʀᴀʟs ᴛᴏ ɢᴇᴛ *" + file + "*.\n📊 Cᴜʀʀᴇɴᴛ: *" + bal + "*\n❌ Nᴇᴇᴅᴇᴅ: *" + (target - bal) + "*", {parse_mode: "Markdown"});
    return;
}

Bot.setProperty("balance_" + user.telegramid, bal - target, "integer");

var pending = Bot.getProperty("pending_keys", []);
var req_id = "REQ" + Date.now();
pending.push({ user_id: user.telegramid, req_id: req_id, date: new Date().toLocaleString() });
Bot.setProperty("pending_keys", pending, "json");

var tot_w = Bot.getProperty("total_withdraw", 0) + 1;
Bot.setProperty("total_withdraw", tot_w, "integer");

Bot.sendMessage("✅ *Wɪᴛʜᴅʀᴀᴡ Sᴜᴄᴄᴇssғᴜʟ!*\n\nYᴏᴜʀ ʀᴇǫᴜᴇsᴛ ɪs sᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ.\nAᴅᴍɪɴ ᴡɪʟʟ ᴀᴘᴘʀᴏᴠᴇ ɪᴛ sᴏᴏɴ.\n\n🆔 Rᴇǫᴜᴇsᴛ ID: `" + req_id + "`", {parse_mode: "Markdown"});

var admin = Bot.getProperty("admin_id");
Bot.sendMessageToChatWithId(admin, "🔔 *Nᴇᴡ Fɪʟᴇ Rᴇǫᴜᴇsᴛ!*\n\n👤 Usᴇʀ: `" + user.telegramid + "`\n🆔 Rᴇǫᴜᴇsᴛ ID: `" + req_id + "`\n\nPʟᴇᴀsᴇ ᴄʜᴇᴄᴋ ᴛʜᴇ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ.");


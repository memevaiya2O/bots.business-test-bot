/*CMD
  command: approve_req
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

var params = message.split(" ");
var target_id = params[1];
var req_id = params[2];

Bot.sendMessageToChatWithId(target_id, "🎉 *Yᴏᴜʀ Rᴇǫᴜᴇsᴛ Aᴘᴘʀᴏᴠᴇᴅ!*\n\nAᴅᴍɪɴ ʜᴀs ᴀᴄᴄᴇᴘᴛᴇᴅ ʏᴏᴜʀ ᴡɪᴛʜᴅʀᴀᴡ.\n\n💬 Pʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ Aɢᴇɴᴛ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ꜰɪʟᴇ:\n" + Bot.getProperty("agent_username"));

// Remove from pending
var pending = Bot.getProperty("pending_keys", []);
var filtered = pending.filter(function(item) { return item.req_id !== req_id; });
Bot.setProperty("pending_keys", filtered, "json");

// Log to withdraw channel
var wd_ch = Bot.getProperty("withdraw_channel");
if (wd_ch) {
    Bot.sendMessageToChatWithId(wd_ch, "✅ *Wɪᴛʜᴅʀᴀᴡ Pᴀɪᴅ!*\n\n👤 Usᴇʀ: [" + target_id + "](tg://user?id=" + target_id + ")\n🆔 Req: `" + req_id + "`\n💰 Sᴛᴀᴛᴜs: Aᴘᴘʀᴏᴠᴇᴅ");
}

Bot.sendMessage("✅ Request approved successfully.");
Bot.runCommand("view_pending");


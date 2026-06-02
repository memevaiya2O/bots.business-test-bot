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

var parts     = params.split(" ");
var target_id = parts[0];
var req_id    = parts[1];

if (!target_id || !req_id) { Bot.sendMessage("❌ Iɴᴠᴀʟɪᴅ ᴘᴀʀᴀᴍᴇᴛᴇʀs."); return; }

var pending  = Bot.getProperty("pending_keys", []);
var filtered = [];
var found    = false;
for (var i = 0; i < pending.length; i++) {
    if (pending[i].req_id === req_id) { found = true; }
    else { filtered.push(pending[i]); }
}
Bot.setProperty("pending_keys", filtered, "json");
Bot.setProperty("total_approved", Bot.getProperty("total_approved", 0) + 1, "integer");

var file = Bot.getProperty("file_name", "Premium File");
var agent_uname = Bot.getProperty("agent_username", "@support");
var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

// Notify user
var u_msg = star + "\n  🎉 *Rᴇǫᴜᴇsᴛ Aᴘᴘʀᴏᴠᴇᴅ!*\n" + star + "\n\n" + line + "\n";
u_msg += "✅ Sᴛᴀᴛᴜs: *Aᴘᴘʀᴏᴠᴇᴅ*\n";
u_msg += "📁 Fɪʟᴇ: *" + file + "*\n";
u_msg += "🎫 Rᴇǫ ID: `" + req_id + "`\n" + line + "\n\n";
u_msg += "👨‍💻 Pʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ ᴏᴜʀ ᴀɢᴇɴᴛ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʏᴏᴜʀ ғɪʟᴇ:\n*" + agent_uname + "*";

var script_id = Bot.getProperty("script_file_id", "");
if (script_id) {
    Api.sendDocument({ chat_id: target_id, document: script_id, caption: u_msg, parse_mode: "Markdown" });
} else {
    Bot.sendMessageToChatWithId(target_id, u_msg, {parse_mode: "Markdown"});
}

// Log to withdraw channel
var wd_ch = Bot.getProperty("withdraw_channel", "");
if (wd_ch) {
    var log_msg = "✅ *Wɪᴛʜᴅʀᴀᴡ Aᴘᴘʀᴏᴠᴇᴅ*\n\n";
    log_msg += "👤 Usᴇʀ: [" + target_id + "](tg://user?id=" + target_id + ")\n";
    log_msg += "📁 Fɪʟᴇ: *" + file + "*\n";
    log_msg += "🎫 `" + req_id + "`";
    Bot.sendMessageToChatWithId(wd_ch, log_msg, {parse_mode: "Markdown"});
}

Bot.sendMessage("✅ *Aᴘᴘʀᴏᴠᴇᴅ!* Usᴇʀ `" + target_id + "` ʜᴀs ʙᴇᴇɴ ɴᴏᴛɪғɪᴇᴅ.", {parse_mode: "Markdown"});
Bot.runCommand("view_pending");

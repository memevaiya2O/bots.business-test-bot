/*CMD
  command: reject_req
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

// Refund points
var bal = Bot.getProperty("balance_" + target_id, 0);
var target = Bot.getProperty("ref_target", 5);
Bot.setProperty("balance_" + target_id, bal + target, "integer");

// Remove from pending
var pending  = Bot.getProperty("pending_keys", []);
var filtered = [];
for (var i = 0; i < pending.length; i++) {
    if (pending[i].req_id !== req_id) { filtered.push(pending[i]); }
}
Bot.setProperty("pending_keys", filtered, "json");
Bot.setProperty("total_rejected", Bot.getProperty("total_rejected", 0) + 1, "integer");

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";
var sup  = Bot.getProperty("support_username", "@support");

// Notify user
var u_msg = star + "\n  ❌ *Rᴇǫᴜᴇsᴛ Rᴇᴊᴇᴄᴛᴇᴅ*\n" + star + "\n\n" + line + "\n";
u_msg += "❌ Sᴛᴀᴛᴜs: *Rᴇᴊᴇᴄᴛᴇᴅ*\n";
u_msg += "🎫 Rᴇǫ ID: `" + req_id + "`\n";
u_msg += "⚠️ Rᴇᴀsᴏɴ: Iɴᴠᴀʟɪᴅ ᴏʀ ɪɴᴄᴏᴍᴘʟᴇᴛᴇ ʀᴇǫᴜᴇsᴛ\n" + line + "\n\n";
u_msg += "♻️ Yᴏᴜʀ ᴘᴏɪɴᴛs ʜᴀᴠᴇ ʙᴇᴇɴ *ʀᴇғᴜɴᴅᴇᴅ*.\n";
u_msg += "💬 Fᴏʀ ʜᴇʟᴘ: " + sup;

Bot.sendMessageToChatWithId(target_id, u_msg, {parse_mode: "Markdown"});

// Log to withdraw channel
var wd_ch = Bot.getProperty("withdraw_channel", "");
if (wd_ch) {
    Bot.sendMessageToChatWithId(wd_ch, "❌ *Rᴇᴊᴇᴄᴛᴇᴅ*\n\n👤 [" + target_id + "](tg://user?id=" + target_id + ")\n🎫 `" + req_id + "`", {parse_mode: "Markdown"});
}

Bot.sendMessage("❌ *Rᴇᴊᴇᴄᴛᴇᴅ.* Usᴇʀ `" + target_id + "` ʜᴀs ʙᴇᴇɴ ɴᴏᴛɪғɪᴇᴅ & ᴘᴏɪɴᴛs ʀᴇғᴜɴᴅᴇᴅ.", {parse_mode: "Markdown"});
Bot.runCommand("view_pending");

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
if (pending.length > 0) {
    var skipped = pending.shift(); // Move first one to end
    pending.push(skipped);
    Bot.setProperty("pending_keys", pending, "json");
    Bot.sendMessage("⏭️ Skipped current request.");
    Bot.runCommand("view_pending");
} else {
    Bot.sendMessage("❌ No requests to skip.");
}


/*CMD
  command: /start
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

if (!Bot.getProperty("admin_setup")) {
    Bot.sendMessage("⚠️ Bot is not configured. Admin needs to run 'config' command first.");
    return;
}

var uid = user.telegramid;
var joined_before = User.getProperty("joined_before");

if (!joined_before) {
    var users = Bot.getProperty("all_users", []);
    var ref_id = params; // Params automatically handles space-separated value in /start
    
    users.push(uid);
    Bot.setProperty("all_users", users, "json");
    Bot.setProperty("total_users", Bot.getProperty("total_users", 0) + 1, "integer");
    User.setProperty("joined_before", true, "boolean");

    if (ref_id && ref_id != uid) {
        var rb = Bot.getProperty("balance_" + ref_id, 0);
        Bot.setProperty("balance_" + ref_id, rb + 1, "integer");
        User.setProperty("referred_by", ref_id, "string");
        Bot.sendMessageToChatWithId(ref_id, "🎉 *New Referral!*\nTotal: " + (rb + 1));
    }
}

// Check if check_join command actually exists
Bot.runCommand("check_join");


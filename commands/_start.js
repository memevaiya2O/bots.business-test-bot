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
    Bot.sendMessage("⚠️ *Bᴏᴛ ɴᴏᴛ ᴄᴏɴғɪɢᴜʀᴇᴅ.*\n\nAᴅᴍɪɴ ᴍᴜsᴛ ʀᴜɴ ᴛʜᴇ `config` ᴄᴏᴍᴍᴀɴᴅ ғɪʀsᴛ.", {parse_mode: "Markdown"});
    return;
}

var uid = user.telegramid;
var banned = Bot.getProperty("banned_users", []);
if (banned.indexOf(uid) >= 0) {
    Bot.sendMessage("🚫 *Yᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.*\n\nCᴏɴᴛᴀᴄᴛ sᴜᴘᴘᴏʀᴛ ɪғ ʏᴏᴜ ᴛʜɪɴᴋ ᴛʜɪs ɪs ᴀ ᴍɪsᴛᴀᴋᴇ.", {parse_mode: "Markdown"});
    return;
}

var joined_before = User.getProperty("joined_before");

if (!joined_before) {
    var users = Bot.getProperty("all_users", []);
    var ref_id = params;

    users.push(uid);
    Bot.setProperty("all_users", users, "json");
    Bot.setProperty("total_users", (Bot.getProperty("total_users", 0) + 1), "integer");
    User.setProperty("joined_before", true, "boolean");
    User.setProperty("join_date", new Date().toLocaleDateString(), "string");
    User.setProperty("total_earned", 0, "integer");

    if (ref_id && ref_id != uid && ref_id != "") {
        var ref_existing = Bot.getProperty("all_users", []);
        var ref_valid = false;
        for (var ri = 0; ri < ref_existing.length; ri++) {
            if (String(ref_existing[ri]) === String(ref_id)) { ref_valid = true; break; }
        }

        if (ref_valid) {
            var rb = Bot.getProperty("balance_" + ref_id, 0);
            var new_bal = rb + 1;
            Bot.setProperty("balance_" + ref_id, new_bal, "integer");
            User.setProperty("referred_by", ref_id, "string");

            var ref_target = Bot.getProperty("ref_target", 5);
            var bar_filled = Math.floor((new_bal / ref_target) * 10);
            if (bar_filled > 10) bar_filled = 10;
            var bar_empty = 10 - bar_filled;
            var progress = "";
            for (var bi = 0; bi < bar_filled; bi++) progress += "▰";
            for (var bj = 0; bj < bar_empty; bj++) progress += "▱";

            var line = "━━━━━━━━━━━━━━━━";
            var notif = "🎉 *Nᴇᴡ Rᴇғᴇʀʀᴀʟ Jᴏɪɴᴇᴅ!*\n\n";
            notif += "👤 Usᴇʀ [" + user.first_name + "](tg://user?id=" + uid + ") ᴊᴏɪɴᴇᴅ ᴠɪᴀ ʏᴏᴜʀ ʟɪɴᴋ.\n\n" + line + "\n";
            notif += "✅ Eᴀʀɴᴇᴅ: +1 Pᴏɪɴᴛ\n";
            notif += "👥 Rᴇғᴇʀʀᴀʟs: " + new_bal + "/" + ref_target + "\n";
            notif += "📊 Pʀᴏɢʀᴇss: " + progress + "\n" + line;

            Bot.sendMessageToChatWithId(ref_id, notif, {parse_mode: "Markdown"});

            var act_ch = Bot.getProperty("activity_channel", "");
            if (act_ch && Bot.getProperty("auto_activity_posts", true)) {
                var act_msg = "👥 *Nᴇᴡ Usᴇʀ Jᴏɪɴᴇᴅ!*\n\n";
                act_msg += "👤 Usᴇʀ: [" + user.first_name + "](tg://user?id=" + uid + ")\n";
                act_msg += "🔗 Rᴇғᴇʀʀᴇᴅ ʙʏ: `" + ref_id + "`\n";
                act_msg += "📅 " + new Date().toLocaleDateString();
                Bot.sendMessageToChatWithId(act_ch, act_msg, {parse_mode: "Markdown"});
            }
        }
    }
}

Bot.runCommand("check_join");

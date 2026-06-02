/*CMD
  command: leaderboard
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

var users = Bot.getProperty("all_users", []);
var list  = [];

for (var i = 0; i < users.length; i++) {
    var uid = users[i];
    var bal = Bot.getProperty("balance_" + uid, 0);
    if (bal > 0) { list.push({ id: uid, balance: bal }); }
}

list.sort(function(a, b) { return b.balance - a.balance; });

var medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
var line   = "━━━━━━━━━━━━━━━━";
var star   = "✦━━━━━━━━━━━━━━━✦";
var target = Bot.getProperty("ref_target", 5);

var text = star + "\n  🏆 *Tᴏᴘ 10 Rᴇғᴇʀʀᴇʀs*\n" + star + "\n\n";

if (list.length == 0) {
    text += "📭 Nᴏ ᴅᴀᴛᴀ ᴀᴠᴀɪʟᴀʙʟᴇ ʏᴇᴛ.\n\nBᴇ ᴛʜᴇ ғɪʀsᴛ ᴛᴏ ʀᴇғᴇʀ ᴀ ғʀɪᴇɴᴅ!";
} else {
    text += line + "\n";
    var limit = Math.min(list.length, 10);
    for (var j = 0; j < limit; j++) {
        var entry = list[j];
        var bar_f = Math.floor((entry.balance / target) * 6);
        if (bar_f > 6) bar_f = 6;
        var bar = "";
        for (var bi = 0; bi < bar_f; bi++) bar += "▰";
        for (var bj = bar_f; bj < 6; bj++) bar += "▱";

        var you = (String(entry.id) === String(user.telegramid)) ? " ← *Yᴏᴜ*" : "";
        text += medals[j] + " `" + entry.id + "`" + you + "\n";
        text += "   💰 *" + entry.balance + " ᴘᴛs*  " + bar + "\n";
    }
    text += line + "\n\n";

    // Show current user rank
    var my_rank = -1;
    for (var r = 0; r < list.length; r++) {
        if (String(list[r].id) === String(user.telegramid)) { my_rank = r + 1; break; }
    }
    if (my_rank > 10) {
        text += "📍 *Yᴏᴜʀ Rᴀɴᴋ: #" + my_rank + "*\n";
    }
}

var buttons = [
    [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ", command: "refer"}],
    [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];
Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});

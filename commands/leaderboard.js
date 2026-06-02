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
var list = [];

for (var i = 0; i < users.length; i++) {
    var uid = users[i];
    var bal = Bot.getProperty("balance_" + uid, 0);
    if (bal > 0) {
        list.push({ id: uid, balance: bal });
    }
}

list.sort(function(a, b) { return b.balance - a.balance; });

var text = "🏆 *Tᴏᴘ 10 Rᴇғᴇʀʀᴇʀs*\n\n";
var limit = Math.min(list.length, 10);

if (limit == 0) {
    text += "No data available yet.";
} else {
    for (var j = 0; j < limit; j++) {
        text += (j + 1) + ". ID: `" + list[j].id + "` — *" + list[j].balance + "* refs\n";
    }
}

Bot.sendMessage(text, {parse_mode: "Markdown"});


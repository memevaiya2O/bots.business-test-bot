/*CMD
  command: give_balance
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

if (user.telegramid != Bot.getProperty("admin_id")) { return; }

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

// params format: "user_id amount" or empty
if (!params) {
    User.setProperty("awaiting_give_bal", true, "boolean");
    Bot.sendMessage(star + "\n  💰 *Gɪᴠᴇ Bᴀʟᴀɴᴄᴇ*\n" + star + "\n\n" + line + "\nSᴇɴᴅ: `USER_ID AMOUNT`\nExᴀᴍᴘʟᴇ: `123456789 10`\n" + line, {parse_mode: "Markdown"});
    return;
}

var parts     = params.split(" ");
var target_id = parts[0];
var amount    = parseInt(parts[1]);

if (!target_id || isNaN(amount)) {
    Bot.sendMessage("❌ Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Usᴇ: `USER_ID AMOUNT`", {parse_mode: "Markdown"});
    return;
}

var cur_bal  = Bot.getProperty("balance_" + target_id, 0);
var new_bal  = cur_bal + amount;
Bot.setProperty("balance_" + target_id, new_bal, "integer");

// Notify user
var target = Bot.getProperty("ref_target", 5);
var bar_f  = Math.floor((new_bal / target) * 10);
if (bar_f > 10) bar_f = 10;
var bar = "";
for (var bi = 0; bi < bar_f; bi++) bar += "▰";
for (var bj = bar_f; bj < 10; bj++) bar += "▱";

var u_msg = "🎁 *Bᴏɴᴜs Pᴏɪɴᴛs Rᴇᴄᴇɪᴠᴇᴅ!*\n\n" + line + "\n";
u_msg += "✅ Rᴇᴄᴇɪᴠᴇᴅ: *+" + amount + " Pᴏɪɴᴛs*\n";
u_msg += "💰 Bᴀʟᴀɴᴄᴇ: *" + new_bal + " / " + target + "*\n";
u_msg += "📊 Pʀᴏɢʀᴇss: " + bar + "\n" + line + "\n\n";
u_msg += "🎉 Kᴇᴇᴘ ɪᴛ ᴜᴘ!";
Bot.sendMessageToChatWithId(target_id, u_msg, {parse_mode: "Markdown"});

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Dᴏɴᴇ!*\n\n🆔 Usᴇʀ: `" + target_id + "`\n✅ Gᴀᴠᴇ: *+" + amount + " ᴘᴛs*\n💰 Nᴇᴡ Bᴀʟ: *" + new_bal + "*", {parse_mode: "Markdown"});

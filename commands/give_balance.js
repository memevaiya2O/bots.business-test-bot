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

// FIX: Use params (set by _.js pending_action router) or show prompt
if (!params) {
    User.setProperty("pending_action", "give_balance", "string");
    Bot.sendMessage(star + "\n  💰 *Gɪᴠᴇ Bᴀʟᴀɴᴄᴇ*\n" + star + "\n\n" + line + "\nFᴏʀᴍᴀᴛ: `USER_ID AMOUNT`\nExᴀᴍᴘʟᴇ: `123456789 10`\nNᴇɢᴀᴛɪᴠᴇ ᴛᴏ ᴅᴇᴅᴜᴄᴛ: `123456789 -5`\n\n_Sᴇɴᴅ /cancel ᴛᴏ ᴀʙᴏʀᴛ_\n" + line, {parse_mode: "Markdown"});
    return;
}

var parts     = params.trim().split(" ");
var target_id = parts[0];
var amount    = parseInt(parts[1]);

if (!target_id || isNaN(amount)) {
    Bot.sendMessage("❌ *Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ.*\nUse: `USER_ID AMOUNT`", {parse_mode: "Markdown"});
    return;
}

var cur_bal = Bot.getProperty("balance_" + target_id, 0);
var new_bal = cur_bal + amount;
if (new_bal < 0) new_bal = 0;
Bot.setProperty("balance_" + target_id, new_bal, "integer");

// Notify user
var target = Bot.getProperty("ref_target", 5);
var bar_f  = Math.floor((new_bal / target) * 10);
if (bar_f > 10) bar_f = 10;
var bar = "";
for (var bi = 0; bi < bar_f; bi++) bar += "▰";
for (var bj = bar_f; bj < 10; bj++) bar += "▱";

var sign   = amount >= 0 ? "+" : "";
var emoji  = amount >= 0 ? "🎁" : "📉";
var u_msg  = emoji + " *Pᴏɪɴᴛs " + (amount >= 0 ? "Aᴅᴅᴇᴅ" : "Dᴇᴅᴜᴄᴛᴇᴅ") + "!*\n\n━━━━━━━━━━━━━━━━\n";
u_msg += (amount >= 0 ? "✅" : "📉") + " Cʜᴀɴɢᴇ: *" + sign + amount + " Pᴏɪɴᴛ" + (Math.abs(amount) > 1 ? "s" : "") + "*\n";
u_msg += "💰 Bᴀʟᴀɴᴄᴇ: *" + new_bal + " / " + target + "*\n";
u_msg += "📊 Pʀᴏɢʀᴇss: " + bar + "\n━━━━━━━━━━━━━━━━";
Bot.sendMessageToChatWithId(target_id, u_msg, {parse_mode: "Markdown"});

var buttons = [[{title: "🔙 Aᴅᴍɪɴ Pᴀɴᴇʟ", command: "admin_panel"}]];
Bot.sendInlineKeyboard(buttons, "✅ *Dᴏɴᴇ!*\n\n🆔 `" + target_id + "`\n" + emoji + " *" + sign + amount + " ᴘᴛs*\n💰 Nᴇᴡ ʙᴀʟ: *" + new_bal + "*", {parse_mode: "Markdown"});

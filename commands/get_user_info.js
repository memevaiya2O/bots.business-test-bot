/*CMD
  command: get_user_info
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

var target_id = message;
var bal = Bot.getProperty("balance_" + target_id, "N/A");

if (bal === "N/A") {
    Bot.sendMessage("❌ Usᴇʀ ɴᴏᴛ ғᴏᴜɴᴅ ɪɴ ᴅᴀᴛᴀʙᴀsᴇ.");
    return;
}

var text = "👤 *Usᴇʀ Iɴғᴏʀᴍᴀᴛɪᴏɴ*\n\n";
text += "🆔 ID: `" + target_id + "`\n";
text += "💰 Rᴇғᴇʀʀᴀʟs: *" + bal + "*\n";

var buttons = [
    [{title: "➕ Aᴅᴅ Rᴇғ", command: "edit_bal add " + target_id}, {title: "➖ Rᴇᴍᴏᴠᴇ Rᴇғ", command: "edit_bal sub " + target_id}],
    [{title: "🔙 Bᴀᴄᴋ", command: "admin_panel"}]
];

Bot.sendInlineKeyboard(buttons, text);


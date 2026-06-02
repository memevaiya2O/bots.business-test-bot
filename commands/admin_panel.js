/*CMD
  command: admin_panel
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

var stats = "📊 *Aᴅᴍɪɴ Sᴛᴀᴛɪsᴛɪᴄs*\n\n";
stats += "👤 Tᴏᴛᴀʟ Usᴇʀs: *" + Bot.getProperty("total_users", 0) + "*\n";
stats += "🎁 Tᴏᴛᴀʟ Wɪᴛʜᴅʀᴀᴡs: *" + Bot.getProperty("total_withdraw", 0) + "*\n";
stats += "🔑 Pᴇɴᴅɪɴɢ Rᴇǫᴜᴇsᴛs: *" + Bot.getProperty("pending_keys", []).length + "*";

var buttons = [
    [{title: "📥 Pᴇɴᴅɪɴɢ Rᴇǫᴜᴇsᴛs", command: "view_pending"}],
    [{title: "📢 Bʀᴏᴀᴅᴄᴀsᴛ", command: "broadcast"}, {title: "⚙️ Sᴇᴛᴛɪɴɢs", command: "bot_settings"}],
    [{title: "👤 Usᴇʀ Dᴇᴛᴀɪʟs", command: "user_details"}]
];

Bot.sendInlineKeyboard(buttons, stats);


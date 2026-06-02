/*CMD
  command: user_details
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

Bot.sendMessage("🔍 *Sᴇɴᴅ ᴛʜᴇ Usᴇʀ ID:*");
Bot.runCommand("get_user_info");


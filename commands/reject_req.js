/*CMD
  command: reject_req
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

var params = message.split(" ");
var target_id = params[1];
var req_id = params[2];

Bot.sendMessageToChatWithId(target_id, "❌ *Rᴇǫᴜᴇsᴛ Rᴇᴊᴇᴄᴛᴇᴅ!*\n\nYᴏᴜʀ ᴡɪᴛʜᴅʀᴀᴡ ʀᴇǫᴜᴇsᴛ (ID: `" + req_id + "`) ᴡᴀs ʀᴇᴊᴇᴄᴛᴇᴅ ʙʏ ᴛʜᴇ ᴀᴅᴍɪɴ.\n\n⚠️ Rᴇᴀsᴏɴ: Iɴᴠᴀʟɪᴅ ᴏʀ ғᴀᴋᴇ ʀᴇғᴇʀʀᴀʟs ᴅᴇᴛᴇᴄᴛᴇᴅ.");

var pending = Bot.getProperty("pending_keys", []);
var filtered = pending.filter(function(item) { return item.req_id !== req_id; });
Bot.setProperty("pending_keys", filtered, "json");

Bot.sendMessage("❌ Request rejected.");
Bot.runCommand("view_pending");


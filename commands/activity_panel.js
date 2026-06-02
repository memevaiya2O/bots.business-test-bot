/*CMD
  command: activity_panel
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
  Bot.sendKeyboard("✅ Aᴄᴛɪᴠɪᴛʏ ON, ❌ Aᴄᴛɪᴠɪᴛʏ OFF\n📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ, 👑 Aᴅᴍɪɴ Pᴀɴᴇʟ", "📡 *Aᴜᴛᴏ Aᴄᴛɪᴠɪᴛʏ Pᴏsᴛs*\n\nCʜᴀɴɴᴇʟ: " + Bot.getProperty("activity_channel", "Not Set") + "\nSᴛᴀᴛᴜs: *" + (Bot.getProperty("auto_activity_posts", true) ? "ON ✅" : "OFF ❌") + "*\n\nAᴜᴛᴏ ᴘᴏsᴛs:\n• Nᴇᴡ ᴜsᴇʀ ᴊᴏɪɴ\n• Nᴇᴡ ʀᴇғᴇʀʀᴀʟ\n• Fɪʟᴇ ᴄʟᴀɪᴍ / ᴡɪᴛʜᴅʀᴀᴡ");



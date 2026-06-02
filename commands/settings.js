/*CMD
  command: settings
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
  Bot.sendKeyboard("✏️ Cʜᴀɴɢᴇ Rᴇғᴇʀʀᴀʟ, 👨‍💻 Cʜᴀɴɢᴇ Aɢᴇɴᴛ Usᴇʀɴᴀᴍᴇ\n🆔 Cʜᴀɴɢᴇ Aɢᴇɴᴛ ID, 📂 Sᴇᴛ Sᴄʀɪᴘᴛ Fɪʟᴇ\n📁 Sᴇᴛ Fɪʟᴇ Nᴀᴍᴇ, 💬 Sᴇᴛ Sᴜᴘᴘᴏʀᴛ\n📦 Sᴇᴛ Wɪᴛʜᴅʀᴀᴡ Cʜᴀɴɴᴇʟ, 📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ\n👑 Aᴅᴍɪɴ Pᴀɴᴇʟ", "⚙️ *Bᴏᴛ Sᴇᴛᴛɪɴɢs*\n\n🎯 Rᴇғᴇʀʀᴀʟ Rᴇǫᴜɪʀᴇᴅ: *" + Bot.getProperty("ref_target", 5) + "*\n👨‍💻 Aɢᴇɴᴛ: " + Bot.getProperty("agent_username", "@agent_username") + "\n🆔 Aɢᴇɴᴛ ID: `" + Bot.getProperty("agent_id") + "`\n📁 Fɪʟᴇ: *" + Bot.getProperty("file_name", "Premium File") + "*\n💬 Sᴜᴘᴘᴏʀᴛ: " + Bot.getProperty("support_username", "@support_username") + "\n📦 Wɪᴛʜᴅʀᴀᴡ Cʜ: " + Bot.getProperty("withdraw_channel", "Not Set") + "\n📡 Aᴄᴛɪᴠɪᴛʏ Cʜ: " + Bot.getProperty("activity_channel", "Not Set"));


